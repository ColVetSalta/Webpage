/* eslint-disable @typescript-eslint/naming-convention */
import Cargo from '../models/Cargo'
import Matriculado from '../models/Matriculado'
import Organismo from '../models/Organismo'
import { format } from 'date-fns'

export async function postCargo ({
  nombre,
  orgid
}: Pick<Cargo, 'nombre' | 'orgid' >): Promise<Cargo> {
  return await Cargo.create({
    nombre,
    orgid
  })
}

export async function addCargoToOrg ({ orgid, cargo }: { orgid: string, cargo: string }): Promise<any> {
  const org = await Organismo.findByPk(orgid)
  await org?.$add('miembros', await postCargo({ nombre: cargo, orgid }))
  const orgAdded = await org?.$get('miembros')
  return orgAdded
}

export async function addCargoToMat ({ mp, cargo, orgid, fecha_inicio, fecha_final }: { mp: number, cargo: string, orgid: string, fecha_inicio: string, fecha_final: string }): Promise<any> {
  const fechaIFormateada = format(new Date(fecha_inicio), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
  const fechaFFormateada = format(new Date(fecha_final), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
  const mat = await Matriculado.findByPk(mp)
  const car = await Cargo.findOne({
    where: {
      nombre: cargo,
      orgid
    }
  })
  if (car === null) throw new Error(`No se encuentra el cargo de ${cargo} para el organismo ${orgid}`)
  if (mat === null) throw new Error(`No se encuentra disponible la matrícula N° ${mp}`)
  await mat?.$add('cargo', car, {
    through: {
      fecha_inicio: fechaIFormateada,
      fecha_final: fechaFFormateada
    }
  })
  const matriculaAdded = await mat?.$get('cargo')
  console.log(matriculaAdded)
  return matriculaAdded
}

export async function getCargos (): Promise<Cargo[]> {
  return await Cargo.findAll()
}
export async function getCargo (id: number): Promise<any> {
  const charge = await Cargo.findOne({
    where: { id }
  })
  return charge?.toJSON()
}

export async function getCargoById (nombre: string, orgid: number): Promise<any> {
  const charge = await Cargo.findOne({
    where: { nombre, orgid }
  })
  return charge?.toJSON()
}
export async function editCargo (data: Cargo): Promise<[affectedCount: number]> {
  return await Cargo.update({
    nombre: data.nombre,
    orgid: data.orgid
  },
  {
    where: {
      id: data.id
    }
  })
}
export async function deleteCargo (id: number): Promise<string> {
  await Cargo.destroy({ where: { id } })
    .then(() => console.log(`Cargo ${id} eliminado`))
  return `Cargo ${id} eliminado`
}
