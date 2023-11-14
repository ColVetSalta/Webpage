/* eslint-disable @typescript-eslint/naming-convention */

import Novedad from '../models/Novedad'

export async function postNovedad ({
  image,
  alt,
  title,
  summary,
  fulltext,
  date,
  url
}: Novedad): Promise<any> {
  return await Novedad.create({
    image,
    alt,
    title,
    summary,
    fulltext,
    date,
    url
  })
}

export async function getNovedads (): Promise<Novedad[]> {
  return await Novedad.findAll()
}

export async function getNovedadById (id: number): Promise<any> {
  const charge = await Novedad.findOne({
    where: { id }
  })
  return charge?.toJSON()
}

export async function editNovedad (data: Novedad): Promise<[affectedCount: number]> {
  return await Novedad.update({
    // fecha_inicio: data.fecha_inicio,
    // fecha_final: data.fecha_final,
    // mp: data.mp,
    // cargoid: data.cargoid
  },
  {
    where: {
      id: data.id
    }
  })
}

export async function deleteNovedad (id: number): Promise<string> {
  await Novedad.destroy({ where: { id } })
    .then(() => console.log(`Novedad ${id} eliminado`))
  return `Novedad ${id} eliminado`
}
