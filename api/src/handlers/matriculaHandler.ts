/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import {
  editMatriculado,
  getMatriculado,
  getMatriculados,
  deleteMatriculado,
  postMatriculado
} from '../controllers/matriculaController'
import { datat } from '../types'

export async function postMatriculaHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  try {
    const create = await postMatriculado(data)
    res.status(201).json(create)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function getMatriculaHandler (req: Request, res: Response): Promise<void> {
  const mp = req.params.mp
  try {
    if (mp) {
      const matriculado = await getMatriculado(Number(mp))
      res.status(200).json(matriculado)
    } else {
      const list = await getMatriculados()
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
export async function modifyMatriculaHandler (req: Request, res: Response): Promise<void> {
  const data: datat = req.body // falta validar datos
  const mp = req.params.mp
  try {
    const matriculado = await getMatriculado(Number(mp))
    Object.keys(matriculado).forEach((att) => {
      Object.keys(data).includes(att) && (matriculado[att] = data[att])
    })
    await editMatriculado(matriculado)
    const modify = await getMatriculado(Number(mp))
    res.status(200).json(modify)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
// Un matriculado no se puede eliminar, el modelo es paranoid: true.
// Se considera esta función para la cancelacion de matrícula:
export async function deleteMatriculaHandler (req: Request, res: Response): Promise<void> {
  const { mp } = req.params
  try {
    const service = await deleteMatriculado(Number(mp))
    res.status(200).json(service)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
