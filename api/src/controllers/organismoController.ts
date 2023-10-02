/* eslint-disable array-callback-return */
// import { Op } from 'sequelize'
// import Cargo from '../models/Cargo'
// import Matriculado from '../models/Matriculado'
import Organismo from '../models/Organismo'
import { sequelize } from '../db'
import format from 'date-fns/format'
// import Periodo from '../models/Periodo'

export async function postOrganismo (data: Organismo): Promise<any> {
  return await Organismo.create({
    nombre: data.nombre
  })
}
export async function getOrganismos (): Promise<Organismo[]> {
  return await Organismo.findAll()
}
export async function getOrganismo (name: string, date: string): Promise<any> {
  const currentDate = format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
  const org = await sequelize.query(`SELECT c.nombre AS cargo, m.nombre, m.apellido, p.fecha_inicio, p.fecha_final FROM cargo c LEFT JOIN periodo p ON c.id = p.cargoid LEFT JOIN matriculado m ON p.mp = m.mp WHERE c.orgid = '${name}' AND  m.mp IN ( SELECT m.mp FROM matriculado AS m JOIN periodo AS p ON  m.mp = p.mp WHERE (p.fecha_inicio <= '${currentDate.toString()}' AND p.fecha_final >= '${currentDate.toString()}')) OR p.id IS NULL ORDER BY c.nombre;`, {
    nest: true,
    model: Organismo
  })
  // const org = await Organismo.findOne({
  //   include: {
  //     model: Cargo,
  //     attributes: [['nombre', 'cargo']],
  //     include: [{
  //       model: Matriculado,
  //       through: {
  //         as: 'Periodo',
  //         where: {
  //           [Op.and]: [{
  //             fecha_inicio: { [Op.lte]: currentDate },
  //             fecha_final: { [Op.gte]: currentDate }
  //           }]
  //         },
  //         attributes: ['fecha_inicio', 'fecha_final']
  //       },
  //       attributes: ['mp', 'nombre', 'apellido']
  //     }]
  //   },
  //   where: {
  //     nombre: name

  //   }
  // })
  const objOrg = { [name]: org }
  return objOrg
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
