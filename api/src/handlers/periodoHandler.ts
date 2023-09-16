/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import {
//   editPeriodo,
//   getPeriodo,
//   getPeriodos,
//   deletePeriodo,
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
}/*
export async function getPeriodoHandler (req: Request, res: Response): Promise<void> {
  const resolution = req.params.Periodo
  try {
    if (resolution) {
      const organism = await getPeriodo(Number(resolution))
      res.status(200).json(organism)
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
    const resolution = await getPeriodo(Number(id))
    Object.keys(resolution).forEach((att) => {
      Object.keys(data).includes(att) && (resolution[att] = data[att])
    })
    await editPeriodo(data)
    const modify = await getPeriodo(Number(id))
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
    const service = await deletePeriodo(Number(id))
    res.status(200).json(service)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
*/
