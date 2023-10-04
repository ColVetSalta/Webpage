/* eslint-disable @typescript-eslint/naming-convention */
import OtroDato from '../models/OtroDato'
import Matriculado from '../models/Matriculado'

export async function addOtroDatoToMat (
  { mp, newdato }: { mp: string, newdato: { titulo: string, descripcion: string } }
): Promise<any> {
  const mat = await Matriculado.findByPk(mp)
  await mat?.$create('dato', {
    titulo: newdato.titulo,
    descripcion: newdato.descripcion
  })
  await mat?.save()
  return await OtroDato.findOne({
    where: {
      titulo: newdato.titulo,
      mp
    }
  })
}

export async function deleteOtroDato (mp: number, id: number): Promise<string> {
  await OtroDato.destroy({ where: { mp, id } })
    .then(() => console.log(`El dato ${id} de la M.P. ${mp} fue eliminado`))
  return `El dato ${id} de la M.P. ${mp} fue eliminado`
}
