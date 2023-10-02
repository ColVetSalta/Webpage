/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import {
  editCargo,
  getCargoById,
  getCargos,
  deleteCargo,
  postCargo
  , addCargoToMat
} from '../controllers/cargoController'

export async function postCargoHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  try {
    const create = await postCargo(data)
    res.status(201).json(create)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}

export async function getCargoHandler (req: Request, res: Response): Promise<void> {
  const { nombre, orgid } = req.body
  try {
    if (orgid) {
      const Cargo = await getCargoById(nombre, orgid)
      res.status(200).json(Cargo)
    } else {
      const list = await getCargos()
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
export async function modifyCargoHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  const { nombre, orgid } = req.params
  try {
    const cargo = await getCargoById(nombre, orgid)
    Object.keys(cargo).forEach((att) => {
      Object.keys(data).includes(att) && (cargo[att] = data[att])
    })
    await editCargo(data)
    const modify = await getCargoById(nombre, orgid)
    res.send(modify)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function deleteCargoHandler (req: Request, res: Response): Promise<void> {
  const { id } = req.params
  try {
    const Cargo = await deleteCargo(Number(id))
    res.status(200).json(Cargo)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}

export async function newCargoToMatriculaHandler (req: Request, res: Response): Promise<void> {
  const { fecha_inicio, fecha_final, mp } = req.body
  const { id, charge } = req.params
  try {
    await addCargoToMat({ mp, cargo: charge, orgid: id, fecha_inicio, fecha_final })
    const cargo = await getCargoById(charge, id)
    res.send(cargo)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
