/* eslint-disable @typescript-eslint/naming-convention */
import Matriculado from '../models/Matriculado'
import { datat } from '../types'

export async function postMatriculado (data: Matriculado): Promise<Matriculado> {
  return await Matriculado.create({
    mp: data.mp,
    nombre: data.nombre,
    apellido: data.apellido,
    telefono: data.telefono,
    correo_electronico: data.correo_electronico,
    f_nacimiento: data.f_nacimiento,
    direccion: data.direccion,
    f_alta: data.f_alta
  })
}
export async function getMatriculados (): Promise<Matriculado[]> {
  return await Matriculado.findAll()
}
export async function getMatriculado (mp: number): Promise<any> {
  const mat = await Matriculado.findOne({
    where: { mp }
  })
  return mat?.toJSON()
}
export async function editMatriculado (data: Matriculado | datat): Promise<[affectedCount: number]> {
  return await Matriculado.update({
    nombre: data.nombre,
    apellido: data.apellido,
    telefono: data.telefono,
    correo_electronico: data.correo_electronico,
    f_nacimiento: data.f_nacimiento,
    direccion: data.direccion,
    f_alta: data.f_alta
  },
  {
    where: {
      mp: data.mp
    }
  })
}
export async function deleteMatriculado (mp: number): Promise<string> {
  await Matriculado.destroy({ where: { mp } })
    .then(() => console.log(`Matricula ${mp} cancelada`))
  return `Matricula ${mp} cancelada`
}
