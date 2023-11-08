/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import {
  editOrgName,
  getOrganismo,
  deleteOrganismo,
  postOrganismo,
  getOrganismosList
} from '../controllers/organismoController'
import { addCargoToOrg } from '../controllers/cargoController'
import { OrgObject } from './assets/ObjectCreator'

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
  const { org, date } = req.query
  const { full } = req.body
  const dateCurr = date || new Date()
  try {
    if (org) {
      const organism = await getOrganismo(String(org), String(dateCurr))
      res.status(200).json(organism)
    } else if (full) {
      const list = await getOrganismosList()
      const fullList = await OrgObject(list, dateCurr)
      console.log(fullList, 'TS')
      // let fullList = {}
      // await Promise.all(
      //   list.map((or) => {
      //     console.log(or.nombre)
      //     fullList = { ...getOrganismo(or.nombre, dateCurr as string) }
      //     console.log(fullList)
      //   })
      // )
      res.status(200).json(fullList)
    } else {
      const list = await getOrganismosList()
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
  const dateCurr = String(new Date())
  let orgid = String(req.params.id)
  try {
    if (cargo) {
      await addCargoToOrg({ cargo, orgid })
    }
    if (nombre) {
      await editOrgName({ orgid, nombre })
      orgid = nombre
    }
    const org = await getOrganismo(orgid, dateCurr)
    res.status(200).json(org)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.status(404).send(String(error))
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
