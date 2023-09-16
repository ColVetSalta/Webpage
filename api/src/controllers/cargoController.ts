import Cargo from '../models/Cargo'

export async function postCargo ({
  nombre,
  orgId
}: Cargo): Promise<any> {
  return await Cargo.create({
    nombre,
    orgId
  })
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
export async function editCargo (data: Cargo): Promise<[affectedCount: number]> {
  return await Cargo.update({
    nombre: data.nombre,
    orgId: data.orgId
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
