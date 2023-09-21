/* eslint-disable @typescript-eslint/naming-convention */

import Periodo from '../models/Periodo'

export async function postPeriodo ({
  id,
  fecha_inicio,
  fecha_final,
  mp,
  cargoid
}: Periodo): Promise<any> {
  return await Periodo.create({
    id,
    fecha_inicio,
    fecha_final,
    mp,
    cargoid
  })
}

export async function getPeriodos (): Promise<Periodo[]> {
  return await Periodo.findAll()
}

export async function getPeriodoById (id: number): Promise<any> {
  const charge = await Periodo.findOne({
    where: { id }
  })
  return charge?.toJSON()
}

export async function editPeriodo (data: Periodo): Promise<[affectedCount: number]> {
  return await Periodo.update({
    fecha_inicio: data.fecha_inicio,
    fecha_final: data.fecha_final,
    mp: data.mp,
    cargoid: data.cargoid
  },
  {
    where: {
      id: data.id
    }
  })
}

export async function deletePeriodo (id: number): Promise<string> {
  await Periodo.destroy({ where: { id } })
    .then(() => console.log(`Periodo ${id} eliminado`))
  return `Periodo ${id} eliminado`
}
