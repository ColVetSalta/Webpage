import Resolucion from '../models/Resolucion'

// interface ResolucionType {
//   id: number | undefined
//   year: number
//   fecha: string
//   visto: string
//   considerando: string
//   resuelve: string
//   firma: string
// }

export async function postResolucion ({
  num,
  year,
  fecha,
  visto,
  considerando,
  resuelve,
  org,
  orgId,
  firmas

}: Resolucion): Promise<any> {
  return await Resolucion.create({
    num,
    year,
    fecha,
    visto,
    considerando,
    resuelve,
    org,
    orgId,
    firmas
  })
}
export async function getResolucions (): Promise<Resolucion[]> {
  return await Resolucion.findAll()
}
export async function getResolucion (id: number): Promise<any> {
  const mat = await Resolucion.findOne({
    where: { id }
  })
  return mat?.toJSON()
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
    orgId: data.orgId,
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
