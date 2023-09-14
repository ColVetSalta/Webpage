import Organismo from '../models/Organismo'

export async function postOrganismo (
  nombre: string): Promise<any> {
  return await Organismo.create({
    nombre
  })
}
export async function getOrganismos (): Promise<any> {
  return await Organismo.findAll()
}
