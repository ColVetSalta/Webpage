/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import {
  editResolucion,
  getResolucionById,
  getResolucions,
  deleteResolucion,
  postResolucion,
  getResolucionByYear,
  getResolucionByYrNm
} from '../controllers/resolucionController'

export async function postResolucionHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  try {
    const create = await postResolucion(data)
    res.status(201).json(create)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function getResolucionHandler (req: Request, res: Response): Promise<void> {
  const resolution = req.params.resolucion
  const { year, number } = req.query
  try {
    if (resolution) {
      const organism = await getResolucionById(Number(resolution))
      res.status(200).json(organism)
    } else if (year && number) {
      const organismList = await getResolucionByYrNm(Number(year), Number(number))
      res.status(200).json(organismList)
    } else if (year) {
      const organismList = await getResolucionByYear(Number(year))
      res.status(200).json(organismList)
    } else {
      const list = await getResolucions()
      res.status(200).json(list)
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function modifyResolucionHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  const id = Number(req.params.id)
  try {
    console.log('inicio: ', data)
    const resolution = await getResolucionById(id)
    Object.keys(resolution).forEach((att) => {
      Object.keys(data).includes(att) && (resolution[att] = data[att])
    })
    console.log('retocada: ', data)
    await editResolucion(data, id)
    const modify = await getResolucionById(id)
    res.send(modify)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function deleteResolucionHandler (req: Request, res: Response): Promise<void> {
  const { id } = req.params
  try {
    const service = await deleteResolucion(Number(id))
    res.status(200).json(service)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
