/* eslint-disable @typescript-eslint/naming-convention */
import OtroDato from '../models/OtroDato'
import Matriculado from '../models/Matriculado'

export async function addOtroDatoToMat (
  { mp, newdato }: { mp: number, newdato: { titulo: string, descripcion: string } }
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

export async function getDato (id: number): Promise<any> {
  const dato = await OtroDato.findByPk(id)
  return dato?.toJSON()
}

export async function deleteOtroDato (mp: number, id: number): Promise<string> {
  await OtroDato.destroy({ where: { mp, id } })
    .then(() => console.log(`El dato ${id} de la M.P. ${mp} fue eliminado`))
  return `El dato ${id} de la M.P. ${mp} fue eliminado`
}

export async function replaceDato (
  { datoId, newdato }: { datoId: number, newdato: OtroDato }
): Promise<any> {
  return await OtroDato.update({
    titulo: newdato.titulo,
    descripcion: newdato.descripcion
  },
  {
    where: { id: datoId }
  })
}
