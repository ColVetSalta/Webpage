/* eslint-disable @typescript-eslint/naming-convention */
import Matriculado from '../models/Matriculado'
import { datat } from '../types'

export async function postMatriculado (data: Matriculado): Promise<Matriculado> {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const f_alta = data.f_alta || String(new Date())
  return await Matriculado.create({
    mp: data.mp,
    nombre: data.nombre,
    apellido: data.apellido,
    telefono: data.telefono,
    correo_electronico: data.correo_electronico,
    f_nacimiento: data.f_nacimiento,
    domicilio_particular: data.domicilio_particular,
    domicilio_laboral: data.domicilio_laboral,
    f_alta
  })
}
export async function getMatriculados (active: boolean | undefined): Promise<Matriculado[]> {
  console.log(active)
  if (typeof active === 'boolean') {
    return await Matriculado.findAll({
      where: { active },
      order: ['mp', 'ASC']
    })
  } else if (active === undefined) {
    return await Matriculado.findAll({ order: ['mp', 'ASC'] })
  } else throw new Error('Incorrect search parameter')
}
export async function getMatriculado (mp: number): Promise<any> {
  const mat = await Matriculado.findByPk(mp)
  return mat?.toJSON()
}
export async function editMatriculado (data: Matriculado | datat): Promise<[affectedCount: number]> {
  return await Matriculado.update({
    active: data.active, // Activa o Suspendida.
    nombre: data.nombre,
    apellido: data.apellido,
    telefono: data.telefono,
    correo_electronico: data.correo_electronico,
    f_nacimiento: data.f_nacimiento,
    domicilio_particular: data.domicilio_particular,
    domicilio_laboral: data.domicilio_laboral,
    f_alta: data.f_alta
  },
  {
    where: {
      mp: data.mp
    }
  })
}

export async function deleteMatriculado (mp: number): Promise<string> {
  await Matriculado.update({ active: false }, { where: { mp } }) // Suspension.
  await Matriculado.destroy({ where: { mp } }) // Cancelacion.
    .then(() => console.log(`Matricula ${mp} cancelada`))
  return `Matricula ${mp} cancelada`
}

export async function reInscMatriculado (mp: number): Promise<{ message: string, reinstated: Matriculado | null }> {
  await Matriculado.restore({ where: { mp } }) // Alta
  await Matriculado.update({ active: true }, { where: { mp } }) // Activo
    .then(() => console.log(`Reinscripción de matrícula ${mp} completada`))
  const mat = await Matriculado.findByPk(mp)
  return { message: `Reinscripción de matrícula ${mp} completada`, reinstated: mat }
}
