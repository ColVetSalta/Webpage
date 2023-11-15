/* eslint-disable @typescript-eslint/naming-convention */

import Novedad from '../models/Novedad'

export async function postNovedad ({
  categoria,
  image,
  alt,
  title,
  summary,
  fulltext,
  date,
  url
}: Novedad): Promise<any> {
  return await Novedad.create({
    categoria,
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
  const news = await Novedad.findByPk(id)
  return news?.toJSON()
}

export async function editNovedad (data: Novedad, id: number): Promise<[affectedCount: number]> {
  return await Novedad.update({
    categoria: data.categoria,
    image: data.image,
    alt: data.alt,
    title: data.title,
    summary: data.summary,
    fulltext: data.fulltext,
    date: data.date,
    url: data.url
  },
  {
    where: {
      id
    }
  })
}

export async function deleteNovedad (id: number): Promise<string> {
  await Novedad.destroy({ where: { id } })
    .then(() => console.log(`Novedad ${id} eliminado`))
  return `Novedad ${id} eliminado`
}
