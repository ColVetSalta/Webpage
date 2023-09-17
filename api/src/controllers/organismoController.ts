import Cargo from '../models/Cargo'
import Matriculado from '../models/Matriculado'
import Organismo from '../models/Organismo'

export async function postOrganismo (data: Organismo): Promise<any> {
  return await Organismo.create({
    nombre: data.nombre
  })
}
export async function getOrganismos (): Promise<Organismo[]> {
  return await Organismo.findAll()
}
export async function getOrganismo (name: string): Promise<any> {
  const org = await Organismo.findOne({
    where: {
      nombre: name
    },
    include: {
      model: Cargo,
      include: [Matriculado]
    }
  })
  return org?.toJSON()
}
export async function editOrgName ({ orgid, nombre }: { orgid: string, nombre: string }): Promise<Organismo | undefined> {
  const org = await Organismo.findByPk(orgid)
  return await org?.update({
    nombre
  })
}

export async function deleteOrganismo (nombre: string): Promise<string> {
  await Organismo.destroy({ where: { nombre } })
    .then(() => console.log(`Organismo ${nombre} eliminado`))
  return `Organismo ${nombre} eliminado`
}
