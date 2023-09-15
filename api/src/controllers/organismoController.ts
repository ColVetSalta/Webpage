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
export async function editOrgName (name: string): Promise<[affectedCount: number]> {
  return await Organismo.update({
    nombre: name
  }, {
    where: {
      nombre: name
    }
  })
}

export async function deleteOrganismo (name: string): Promise<string> {
  await Organismo.destroy({ where: { nombre: name } })
    .then(() => console.log(`Organismo ${name} eliminado`))
  return `Organismo ${name} eliminado`
}
