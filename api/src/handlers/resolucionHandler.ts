/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import {
  editResolucion,
  getResolucion,
  getResolucions,
  deleteResolucion,
  postResolucion
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
  try {
    if (resolution) {
      const organism = await getResolucion(Number(resolution))
      res.status(200).json(organism)
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
  const id = req.params.id
  try {
    const resolution = await getResolucion(Number(id))
    Object.keys(resolution).forEach((att) => {
      Object.keys(data).includes(att) && (resolution[att] = data[att])
    })
    await editResolucion(data)
    const modify = await getResolucion(Number(id))
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
