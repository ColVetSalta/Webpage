// import Firma from '../models/Firma'

// export async function postFirma ({
//   nombre,
//   orgId
// }: Firma): Promise<any> {
//   return await Firma.create({
//     nombre,
//     orgId
//   })
// }
// export async function getFirmas (): Promise<Firma[]> {
//   return await Firma.findAll()
// }
// export async function getFirma (id: number): Promise<any> {
//   const charge = await Firma.findOne({
//     where: { id }
//   })
//   return charge?.toJSON()
// }
// export async function editFirma (data: Firma): Promise<[affectedCount: number]> {
//   return await Firma.update({
//     nombre: data.nombre,
//     orgId: data.orgId
//   },
//   {
//     where: {
//       id: data.id
//     }
//   })
// }
// export async function deleteFirma (id: number): Promise<string> {
//   await Firma.destroy({ where: { id } })
//     .then(() => console.log(`Firma ${id} eliminado`))
//   return `Firma ${id} eliminado`
// }
