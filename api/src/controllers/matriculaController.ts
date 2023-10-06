/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import Matriculado from '../models/Matriculado'
import OtroDato from '../models/OtroDato'
import Telefono from '../models/Telefono'
import { MatriculadoJSON, datat } from '../types'

export async function postMatriculado (data: Matriculado): Promise<MatriculadoJSON> {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const f_alta = data.f_alta || String(new Date())
  const newMat = await Matriculado.create({
    mp: data.mp,
    nombre: data.nombre,
    apellido: data.apellido,
    correo_electronico: data.correo_electronico,
    f_nacimiento: data.f_nacimiento,
    domicilio_particular: data.domicilio_particular,
    domicilio_laboral: data.domicilio_laboral,
    departamento_d_laboral: data.departamento_d_laboral,
    f_alta
  })
  data.tel?.map(async (t) => await newMat.$create('tel', {
    numero: t.numero,
    whatsapp: t.whatsapp,
    principal: t.principal,
    descripcion: t.descripcion
  })
  )
  data.dato?.map(async (d) => await newMat.$create('dato', {
    titulo: d.titulo,
    descripcion: d.descripcion
  })
  )
  await newMat.save()
  return await getMatriculado(data.mp)
}

export async function getMatriculados (active: boolean | undefined): Promise<Matriculado[]> {
  if (typeof active === 'boolean') {
    return await Matriculado.findAll({
      where: { active },
      order: ['mp', 'ASC']
    })
  } else if (active === undefined) {
    return await Matriculado.findAll({ order: ['mp', 'ASC'] })
  } else throw new Error('Incorrect search parameter')
}

export async function getMatriculado (mp: number): Promise<MatriculadoJSON> {
  const mat = await Matriculado.findByPk(mp, {
    attributes: { exclude: ['updatedAt'] },
    include: [{
      model: Telefono,
      attributes: { exclude: ['id', 'deletedAt', 'createdAt', 'updatedAt', 'mp'] }
    }, {
      model: OtroDato,
      attributes: { exclude: ['deletedAt', 'createdAt', 'updatedAt', 'mp'] }
    }]
  })
  console.log(mat?.toJSON())
  if (!mat) throw new Error(`No se encontró la matrícula ${mp}`)
  return mat.toJSON()
}

export async function getMatriculadoFull (mp: number): Promise<any> {
  const mat = await Matriculado.findByPk(mp, {
    include: [{
      model: Telefono
    }, {
      model: OtroDato
    }]
  })
  if (!mat) throw new Error(`No se encontró la matrícula ${mp}`)
  return mat
}

export async function editMatriculado (data: Matriculado | datat): Promise<[affectedCount: number]> {
  return await Matriculado.update({
    active: data.active, // Activa o Suspendida.
    nombre: data.nombre,
    apellido: data.apellido,
    correo_electronico: data.correo_electronico,
    f_nacimiento: data.f_nacimiento,
    domicilio_particular: data.domicilio_particular,
    domicilio_laboral: data.domicilio_laboral,
    departamento_d_laboral: data.departamento_d_laboral,
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
