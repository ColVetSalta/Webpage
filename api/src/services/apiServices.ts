/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response } from 'express'
import Matriculado from '../models/Matriculado'
import ListaMatricula from './Matriculados.json'
import OrgInfo from './Organismos.json'
import NovedadesList from './Novedades.json'
import Organismo from '../models/Organismo'
import { addCargoToMat, postCargo } from '../controllers/cargoController'
import { postNovedad } from '../controllers/novedadController'
import Novedad from '../models/Novedad'

export interface ListaMatriculados {
  mp: number
  apellido: string
  nombre: string
  domicilio_particular: string
  Localidad: string
  departamento_d_laboral?: string
  Telefono?: number
  correo_electronico?: string
  'cadena de mail': string
  Celular?: number
  'Gr. Wsp'?: 'P'
  'ULT. PAGO'?: 'Dec-22'
  ALTA?: string | number
}
export interface DataCargo {
  fecha_inicio: string
  fecha_final: string
  mp: number
  nombre?: string
}
export interface ListOrgs {
  [x: string]: {
    [cargo: string]: DataCargo | DataCargo[]
  }
}

export async function DefaultMatriculaList (
  _req: Request,
  res: Response
): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const list = ListaMatricula as ListaMatriculados[]
  try {
    for (let i = 0; i < list.length; i++) {
      const m = list[i]
      let f_alta = new Date()
      if (m.ALTA !== undefined) {
        f_alta = new Date(m.ALTA)
      }
      let correo_electronico = 'desconocido@unknoun.app'
      if (m.correo_electronico !== undefined) {
        correo_electronico = m.correo_electronico
      }
      let departamento_d_laboral = 'Capital'
      if (m.departamento_d_laboral !== undefined) {
        departamento_d_laboral = m.departamento_d_laboral
      }
      await Matriculado.create({
        mp: m.mp,
        nombre: m.nombre,
        apellido: m.apellido,
        correo_electronico,
        f_nacimiento: f_alta,
        domicilio_particular: m.domicilio_particular,
        domicilio_laboral: m.domicilio_particular,
        departamento_d_laboral,
        f_alta
      }).then(async (nm) => {
        if (m.Telefono !== null) {
          await nm.$create('tel', {
            numero: String(m.Telefono),
            whatsapp: false,
            principal: true,
            descripcion: null
          })
          if (m.Celular !== null) {
            await nm.$create('tel', {
              numero: String(m.Celular),
              whatsapp: true,
              principal: false,
              descripcion: null
            })
          }
        } else if (m.Celular !== null) {
          await nm.$create('tel', {
            numero: String(m.Celular),
            whatsapp: true,
            principal: true,
            descripcion: null
          })
        }
      })
    }
    res.status(201).send('Lista de Matriculados cargada')
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}

export async function DefaultOrganismoCreate (
  _req: Request,
  res: Response
): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  try {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const Creation = async (neworg: Organismo, info: ListOrgs | { [cargo: string]: DataCargo[] }) => {
      const orgid = neworg.dataValues.nombre
      console.log('New Organism id: ', orgid)
      const detail = info[orgid as keyof typeof info]
      if (Array.isArray(detail)) {
        for (let i = 0; detail.length > i; i++) {
          await neworg
            .$add('miembros', await postCargo({ nombre: String(i + 1), orgid }))
            .then(async () => {
              const cargo = String(i + 1)
              await addCargoToMat({
                mp: detail[i].mp,
                cargo,
                orgid,
                fecha_inicio: detail[i].fecha_inicio,
                fecha_final: detail[i].fecha_final
              })
            })
        }
      } else {
        for (const charge in detail) {
          const matricula_periodo = detail[charge as keyof typeof detail] as DataCargo
          await neworg.$add('miembros', await postCargo({ nombre: charge, orgid }))
            .then(async () => {
              await addCargoToMat({
                mp: matricula_periodo.mp,
                cargo: charge,
                orgid,
                fecha_inicio: matricula_periodo.fecha_inicio,
                fecha_final: matricula_periodo.fecha_final
              })
            })
        }
      }
    }
    for (const orgid in OrgInfo) {
      if (orgid === 'consejeros') {
        for (const zone in OrgInfo.consejeros) {
          await Organismo.create({
            nombre: zone
          })
            .then(async (o) => {
              console.log('antes: ', o)
              await Creation(o, OrgInfo.consejeros)
            })
        }
      } else {
        await Organismo.create({
          nombre: orgid
        })
          .then(async (o) => {
            console.log('antes: ', o)
            await Creation(o, OrgInfo)
          })
      }
    }
    res.status(201).send('Lista de Autoridades cargada')
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}

export async function DefaultNovedadList (
  _req: Request,
  res: Response
): Promise<void> {
  try {
    const newsList = NovedadesList as Novedad[]
    newsList?.map(async (data) => await postNovedad(data))
    res.status(201).send('Lista provisoria de Novedades cargada')
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
