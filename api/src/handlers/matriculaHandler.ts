import { Request, Response } from 'express'
import { getMatriculados, postMatriculado } from '../controllers/matriculaContriller'

export async function postMatriculaHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  try {
    const create = await postMatriculado(data)
    res.status(201).json(create)
  } catch (error) {
    res.send('error.message')
  }
}
export async function getMatriculaHandler (_req: Request, res: Response): Promise<void> {
  try {
    const list = await getMatriculados()
    res.status(200).json(list)
  } catch (error) {
    res.send('error.message')
  }
}
export async function modifyMatriculaHandler (_req: Request, res: Response): Promise<void> {
  try {
    res.send('response')
  } catch (error) {
    res.send('error.message')
  }
}
export async function deleteMatriculaHandler (_req: Request, res: Response): Promise<void> {
  try {
    res.send('response')
  } catch (error) {
    res.send('error.message')
  }
}
