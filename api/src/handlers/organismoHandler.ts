/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import {
  editOrgName,
  getOrganismo,
  getOrganismos,
  deleteOrganismo,
  postOrganismo
} from '../controllers/organismoController'
import { addCargoToOrg } from '../controllers/cargoController'

export async function postOrganismoHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  try {
    const create = await postOrganismo(data)
    res.status(201).json(create)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function getOrganismoHandler (req: Request, res: Response): Promise<void> {
  const org = req.query.org
  try {
    if (org) {
      const organism = await getOrganismo(String(org))
      res.status(200).json(organism)
    } else {
      const list = await getOrganismos()
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
export async function modifyOrganismoHandler (req: Request, res: Response): Promise<void> {
  const { nombre, cargo } = req.body
  let orgid = String(req.query.orgid)
  try {
    if (cargo) {
      await addCargoToOrg({ cargo, orgid })
    }
    if (nombre) {
      await editOrgName({ orgid, nombre })
      orgid = nombre
    }
    const org = await getOrganismo(orgid)
    res.send(org)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function deleteOrganismoHandler (req: Request, res: Response): Promise<void> {
  const org = req.params.org
  try {
    const service = await deleteOrganismo(org)
    res.status(200).json(service)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
