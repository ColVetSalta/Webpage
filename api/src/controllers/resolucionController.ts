// import Firma from '../models/Firma'
import Cargo from '../models/Cargo'
import Matriculado from '../models/Matriculado'
import Organismo from '../models/Organismo'
import Periodo from '../models/Periodo'
import Resolucion from '../models/Resolucion'
import { InferCreationAttributes } from 'sequelize'

interface SendResolucion extends Omit<Resolucion, 'org' | 'firmas'> {
  firmas: number[]
}

export async function postResolucion ({
  num,
  year,
  fecha,
  visto,
  considerando,
  resuelve,
  orgid,
  firmas

}: SendResolucion): Promise<any> {
  const currentOrg = await Organismo.findByPk(orgid)
  console.log(currentOrg)
  const currentFirmas = await Promise.all(firmas.map(async (per) => await Periodo.findByPk(per, { include: [Matriculado, Cargo] })))
  console.log(currentFirmas)
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion, @typescript-eslint/consistent-type-assertions
  const newRes = await Resolucion.create({
    num,
    year,
    fecha,
    visto,
    considerando,
    resuelve,
    orgid
  } as InferCreationAttributes<Resolucion>)
  if (currentOrg != null) newRes.org = currentOrg
  if (currentFirmas.includes(null)) throw new Error('No se pudo encontrar al menos uno de los firmantes')
  await newRes.$set('firmas', currentFirmas as Periodo[])
  return newRes
}

export async function getResolucions (): Promise<Resolucion[]> {
  return await Resolucion.findAll()
}
export async function getResolucion (id: number): Promise<any> {
  const res = await Resolucion.findOne({
    where: { id },
    include: {
      model: Periodo,
      attributes: ['mp'],
      include: [{
        model: Matriculado,
        attributes: ['nombre', 'apellido']
      }]
    }
  })
  return res?.toJSON()
}
export async function editResolucion (data: Resolucion): Promise<[affectedCount: number]> {
  return await Resolucion.update({
    year: data.year,
    fecha: data.fecha,
    num: data.num,
    visto: data.visto,
    considerando: data.considerando,
    resuelve: data.resuelve,
    org: data.org,
    orgid: data.orgid,
    firmas: data.firmas
  },
  {
    where: {
      id: data.id
    }
  })
}
export async function deleteResolucion (id: number): Promise<string> {
  await Resolucion.destroy({ where: { id } })
    .then(() => console.log(`Matricula ${id} cancelada`))
  return `Matricula ${id} cancelada`
}
