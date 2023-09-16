/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import {
  editPeriodo,
  getPeriodoById,
  getPeriodos,
  deletePeriodo,
  postPeriodo
} from '../controllers/periodoController'

export async function postPeriodoHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  try {
    const create = await postPeriodo(data)
    res.status(201).json(create)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}

export async function getPeriodoHandler (req: Request, res: Response): Promise<void> {
  const id = req.params.Periodo
  try {
    if (id) {
      const periodo = await getPeriodoById(Number(id))
      res.status(200).json(periodo)
    } else {
      const list = await getPeriodos()
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
export async function modifyPeriodoHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  const id = req.params.id
  try {
    const resolution = await getPeriodoById(Number(id))
    Object.keys(resolution).forEach((att) => {
      Object.keys(data).includes(att) && (resolution[att] = data[att])
    })
    await editPeriodo(data)
    const modify = await getPeriodoById(Number(id))
    res.send(modify)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function deletePeriodoHandler (req: Request, res: Response): Promise<void> {
  const { id } = req.params
  try {
    const periodo = await deletePeriodo(Number(id))
    res.status(200).json(periodo)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
