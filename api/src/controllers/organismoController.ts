/* eslint-disable array-callback-return */

import Organismo from '../models/Organismo'
import { sequelize } from '../db'
import format from 'date-fns/format'

export async function postOrganismo (data: Organismo): Promise<any> {
  return await Organismo.create({
    nombre: data.nombre
  })
}

export async function getOrganismosList (): Promise<Organismo[]> {
  return await Organismo.findAll()
}

export async function getOrganismo (name: string, date: string): Promise<{
  [x: string]: Organismo[]
}> {
  const currentDate = format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
  const org = await sequelize.query(
    `SELECT c.nombre AS cargo, m.mp, m.nombre, m.apellido, p.id AS periodo, p.fecha_inicio, p.fecha_final, t.numero, m.correo_electronico
    FROM cargo c
    LEFT JOIN periodo p ON c.id = p.cargoid
    LEFT JOIN matriculado m ON p.mp = m.mp
    LEFT JOIN telefono t ON m.mp = t.mp
    WHERE c.orgid = '${name}'
    AND ( 
      t.principal = true
      OR t.numero IS NULL)
     AND (m.mp IS NOT NULL AND m.mp IN (
      SELECT m.mp
      FROM matriculado AS m
      JOIN periodo AS p ON  m.mp = p.mp
      JOIN telefono AS t ON m.mp = t.mp
      WHERE (p.fecha_inicio <= '${currentDate.toString()}'
      AND p.fecha_final >= '${currentDate.toString()}')
      AND t.principal = true)
      OR (m.mp IS NULL)
      )
    ORDER BY c.nombre;`, {
      nest: true,
      model: Organismo
    })
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
