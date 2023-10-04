/* eslint-disable @typescript-eslint/naming-convention */
import Telefono from '../models/Telefono'
import Matriculado from '../models/Matriculado'

export async function addTelefonoToMat (
  { mp, newtel }: { mp: string, newtel: { numero: string, whatsapp: boolean, default: boolean } }
): Promise<any> {
  const mat = await Matriculado.findByPk(mp)
  await mat?.$create('tel', {
    numero: newtel.numero,
    whatsapp: newtel.whatsapp,
    default: newtel.default
  })
  await mat?.save()
  return await Telefono.findAll({
    where: { mp }
  })
}

export async function deleteTelefono (mp: number, numero: string): Promise<string> {
  await Telefono.destroy({ where: { mp, numero } })
    .then(() => console.log(`Número telefonico ${numero} eliminado`))
  return `Número telefonico ${numero} eliminado`
}
