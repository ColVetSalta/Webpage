/* eslint-disable @typescript-eslint/naming-convention */
import Marticulado from '../models/Matriculado'
import { datat } from '../types'

export async function postMatriculado (data: Marticulado): Promise<Marticulado> {
  return await Marticulado.create({
    mp: data.mp,
    nombre: data.nombre,
    apellido: data.apellido,
    telefono: data.telefono,
    correo_electronico: data.correo_electronico,
    f_nacimiento: data.f_nacimiento,
    direccion: data.direccion
  })
}
export async function getMatriculados (): Promise<Marticulado[]> {
  return await Marticulado.findAll()
}
export async function getMatriculado (mp: number): Promise<any> {
  const mat = await Marticulado.findOne({
    where: { mp }
  })
  return mat?.toJSON()
}
export async function editMatriculado (data: Marticulado | datat): Promise<[affectedCount: number]> {
  return await Marticulado.update({
    nombre: data.nombre,
    apellido: data.apellido,
    telefono: data.telefono,
    correo_electronico: data.correo_electronico,
    f_nacimiento: data.f_nacimiento,
    direccion: data.direccion
  },
  {
    where: {
      mp: data.mp
    }
  })
}
export async function deleteMatriculado (mp: number): Promise<string> {
  await Marticulado.destroy({ where: { mp } })
    .then(() => console.log(`Matricula ${mp} cancelada`))
  return `Matricula ${mp} cancelada`
}
