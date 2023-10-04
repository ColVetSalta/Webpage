/* eslint-disable @typescript-eslint/naming-convention */
import Telefono from '../models/Telefono'
import Matriculado from '../models/Matriculado'

export async function addTelefonoToMat (
  { mp, newtel }: { mp: number, newtel: Telefono }
): Promise<any> {
  const mat = await Matriculado.findByPk(mp)
  await mat?.$create('tel', {
    numero: newtel.numero,
    whatsapp: newtel.whatsapp,
    principal: newtel.principal,
    descripcion: newtel.descripcion
  })
  await mat?.save()
  return await Telefono.findAll({
    where: { mp }
  })
}

export async function getTelefono (
  { mp, numero }: { mp: number, numero: string }
): Promise<any> {
  const tel = await Telefono.findOne({
    where: {
      mp,
      numero
    }
  })
  return tel?.toJSON()
}

export async function deleteTelefono (mp: number, numero: string): Promise<string> {
  await Telefono.destroy({ where: { mp, numero } })
    .then(() => console.log(`Número telefonico ${numero} eliminado`))
  return `Número telefonico ${numero} eliminado`
}

export async function replaceTelefono (
  { mp, newtel, oldtel }: { mp: number, newtel: Telefono, oldtel: string }
): Promise<any> {
  // const mat = await Matriculado.findByPk(mp)
  return await Telefono.update({
    numero: newtel.numero,
    whatsapp: newtel.whatsapp,
    principal: newtel.principal,
    descripcion: newtel.descripcion
  },
  {
    where: { mp, numero: oldtel }
  })
}
