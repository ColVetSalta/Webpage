/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import {
  editMatriculado,
  getMatriculado,
  getMatriculados,
  deleteMatriculado,
  postMatriculado,
  reInscMatriculado
} from '../controllers/matriculaController'
import { datat } from '../types'
import { addTelefonoToMat, getTelefono, replaceTelefono } from '../controllers/telefonoController'
import { addOtroDatoToMat, getDato, replaceDato } from '../controllers/otroDatoController'

export async function postMatriculaHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  try {
    const create = await postMatriculado(data)
    res.status(201).json(create)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function rePostMatriculaHandler (req: Request, res: Response): Promise<void> {
  const mp = Number(req.params.mp)
  try {
    const create = await reInscMatriculado(mp)
    res.status(201).json(create)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function getMatriculaHandler (req: Request, res: Response): Promise<void> {
  const mp = req.params.mp
  const { active } = req.body
  try {
    if (mp) {
      const matriculado = await getMatriculado(Number(mp))
      res.status(200).json(matriculado)
    } else {
      const list = await getMatriculados(active)
      res.status(200).json(list)
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function modifyMatriculaHandler (req: Request, res: Response): Promise<void> {
  const data: datat = req.body // falta validar datos
  const mp = req.params.mp
  try {
    const matriculado = await getMatriculado(Number(mp))
    Object.keys(matriculado).forEach((att) => {
      Object.keys(data).includes(att) && (matriculado[att] = data[att])
    })
    await editMatriculado(matriculado)
    const modify = await getMatriculado(Number(mp))
    res.status(200).json(modify)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}

export async function modifyAttachedDataHandler (req: Request, res: Response): Promise<void> {
  const mp = Number(req.params.mp)
  const { tel, dato } = req.body
  const oldtel = String(req.query.tel)
  const datoId = Number(req.query.dato)
  try {
    if (tel) {
      if (oldtel) {
        const o_tel = await getTelefono({ mp, numero: oldtel })
        Object.keys(o_tel).forEach((att) => {
          Object.keys(tel).includes(att) && (o_tel[att] = tel[att])
        })
        const modify = await replaceTelefono({ mp, newtel: o_tel, oldtel })
        console.log(modify)
      } else {
        const modify = await addTelefonoToMat({ mp, newtel: tel })
        console.log(modify)
      }
    }
    if (dato) {
      if (datoId) {
        const o_dato = await getDato(datoId)
        Object.keys(o_dato).forEach((att) => {
          Object.keys(dato).includes(att) && (o_dato[att] = dato[att])
        })
        const modify = await replaceDato({ datoId, newdato: o_dato })
        console.log(modify)
      } else {
        const modify = await addOtroDatoToMat({ mp, newdato: dato })
        console.log(modify)
      }
    }
    res.status(200).send('Done')
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}

// Un matriculado no se puede eliminar, el modelo es paranoid: true.
// Se considera esta función para la cancelacion de matrícula:
export async function deleteMatriculaHandler (req: Request, res: Response): Promise<void> {
  const { mp } = req.params
  try {
    const service = await deleteMatriculado(Number(mp))
    res.status(200).json(service)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
