import Resolucion from '../models/Resolucion'

interface ResolucionType {
  id: number | undefined
  year: number
  fecha: string
  visto: string
  considerando: string
  resuelve: string
  firma: string
}

export async function postResolucion ({
  id,
  year,
  fecha,
  visto,
  considerando,
  resuelve,
  firma
}: ResolucionType): Promise<any> {
  return await Resolucion.create({
    id,
    year,
    fecha,
    visto,
    considerando,
    resuelve,
    firma
  })
}
export async function getResolucions (): Promise<any> {
  return await Resolucion.findAll()
}
