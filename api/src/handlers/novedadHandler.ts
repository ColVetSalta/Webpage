/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import {
  editNovedad,
  getNovedadById,
  getNovedads,
  deleteNovedad,
  postNovedad
} from '../controllers/novedadController'

export async function postNovedadHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  try {
    const create = await postNovedad(data)
    res.status(201).json(create)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}

export async function getNovedadHandler (req: Request, res: Response): Promise<void> {
  const id = req.params.Novedad
  try {
    if (id) {
      const periodo = await getNovedadById(Number(id))
      res.status(200).json(periodo)
    } else {
      const list = await getNovedads()
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
export async function modifyNovedadHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  const id = req.params.id
  try {
    const periodo = await getNovedadById(Number(id))
    Object.keys(periodo).forEach((att) => {
      Object.keys(data).includes(att) && (periodo[att] = data[att])
    })
    await editNovedad(data)
    const modify = await getNovedadById(Number(id))
    res.send(modify)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function deleteNovedadHandler (req: Request, res: Response): Promise<void> {
  const { id } = req.params
  try {
    const periodo = await deleteNovedad(Number(id))
    res.status(200).json(periodo)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
