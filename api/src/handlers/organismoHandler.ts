import { Request, Response } from 'express'
import {
  // editOrganismo,
  // getOrganismo,
  // getOrganismos,
  // deleteOrganismo,
  postOrganismo
} from '../controllers/organismoController'

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
export async function getOrganismoHandler (_req: Request, res: Response): Promise<void> {
  try {
    // const list = await getOrganismo()
    res.status(200).json('list')
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function modifyOrganismoHandler (_req: Request, res: Response): Promise<void> {
  try {
    res.send('response')
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ err: error.message })
    } else {
      res.send(String(error))
    }
  }
}
export async function deleteOrganismoHandler (_req: Request, res: Response): Promise<void> {
  try {
    res.send('response')
  } catch (error) {
    res.send('error.message')
  }
}
