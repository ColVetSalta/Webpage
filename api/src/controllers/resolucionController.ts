// import Firma from '../models/Firma'
import { sequelize } from '../db'
// import Cargo from '../models/Cargo'
// import Matriculado from '../models/Matriculado'
import Organismo from '../models/Organismo'
import Periodo from '../models/Periodo'
import Resolucion from '../models/Resolucion'
import { InferCreationAttributes } from 'sequelize'

interface SendResolucion extends Omit<Resolucion, 'org' | 'firmas'> {
  firmas: number[]
}

export async function postResolucion ({
  num,
  year,
  fecha,
  visto,
  considerando,
  resuelve,
  orgid,
  firmas

}: SendResolucion): Promise<any> {
  const currentOrg = await Organismo.findByPk(orgid)
  const currentFirmas = await Promise.all(firmas.map(async (per) => await Periodo.findByPk(per)))
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion, @typescript-eslint/consistent-type-assertions
  const newRes = await Resolucion.create({
    num,
    year,
    fecha,
    visto,
    considerando,
    resuelve,
    orgid
  } as InferCreationAttributes<Resolucion>)
  if (currentOrg != null) newRes.org = currentOrg
  if (currentFirmas.includes(null)) throw new Error('No se pudo encontrar al menos uno de los firmantes')
  await newRes.$set('firmas', currentFirmas as Periodo[])
  return newRes
}

export async function getResolucions (): Promise<Resolucion[]> {
  return await Resolucion.findAll({
    attributes: ['id', 'year', 'num']
  })
}
export async function getResolucionByYear (year: number): Promise<any> {
  const list = await Resolucion.findAll({
    where: {
      year
    },
    attributes: ['id']
  })
  const response = Promise.all(list.map(async (r) => await getResolucionById(r.dataValues.id)))
  return await response
}
export async function getResolucionByYrNm (year: number, number: number): Promise<any> {
  const res = await Resolucion.findOne({
    where: {
      year,
      num: number
    },
    attributes: ['id']
  })
  if (res === null) throw new Error(`No se ha encontrado la resolucion ${number} del ${year}`)
  return await getResolucionById(Number(res.id))
}

export async function getResolucionById (id: number): Promise<any> {
  // const res = await Resolucion.findOne({
  //   where: { id },
  //   include: {
  //     model: Periodo,
  //     attributes: ['mp'],
  //     include: [{
  //       model: Matriculado,
  //       attributes: ['nombre', 'apellido']
  //     }]
  //   }
  // })
  // return res?.toJSON()
  const res = await sequelize.query(
    `SELECT r.num, r.year, r.fecha, r.visto, r.considerando, r.resuelve, r.orgid, p.mp, m.nombre, m.apellido, c.nombre AS cargo
    FROM resolucion r
    JOIN firma f ON r.id = f.resid
    JOIN periodo p ON f.perid = p.id
    JOIN matriculado m ON p.mp = m.mp
    JOIN cargo c ON p.cargoid = c.id
    WHERE r.id = '${id}';`, {
      model: Resolucion
    }
  )
  const firmas = res.map((r): {
    mp: number
    nombre: string
    apellido: string
    cargo: string
  } => {
    return {
      mp: r.dataValues.mp,
      nombre: r.dataValues.nombre,
      apellido: r.dataValues.apellido,
      cargo: r.dataValues.cargo
    }
  })
  const objectRes = {
    fecha: res[0].fecha,
    num: res[0].num,
    year: res[0].year,
    visto: res[0].visto,
    considerando: res[0].considerando,
    resuelve: res[0].resuelve,
    orgid: res[0].orgid,
    firmas
  }
  return objectRes
}
export async function editResolucion (data: Resolucion): Promise<[affectedCount: number]> {
  return await Resolucion.update({
    year: data.year,
    fecha: data.fecha,
    num: data.num,
    visto: data.visto,
    considerando: data.considerando,
    resuelve: data.resuelve,
    org: data.org,
    orgid: data.orgid,
    firmas: data.firmas
  },
  {
    where: {
      id: data.id
    }
  })
}
export async function deleteResolucion (id: number): Promise<string> {
  await Resolucion.destroy({ where: { id } })
    .then(() => console.log(`Matricula ${id} cancelada`))
  return `Matricula ${id} cancelada`
}
