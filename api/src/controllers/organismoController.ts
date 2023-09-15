import Organismo from '../models/Organismo'

export async function postOrganismo (
  nombre: string): Promise<any> {
  return await Organismo.create({
    nombre
  })
}
export async function getOrganismos (): Promise<Organismo[]> {
  return await Organismo.findAll()
}
export async function getOrganismo (name: string): Promise<any> {
  const org = await Organismo.findOne({
    where: {
      nombre: name
    }
  })
  return org?.toJSON()
}
export async function editOrgName (nombre: string): Promise<[affectedCount: number]> {
  return await Organismo.update({
    nombre
  }, {
    where: {
      nombre
    }
  })
}

export async function deleteOrganismo (nombre: string): Promise<string> {
  await Organismo.destroy({ where: { nombre } })
    .then(() => console.log(`Organismo ${nombre} eliminado`))
  return `Organismo ${nombre} eliminado`
}
