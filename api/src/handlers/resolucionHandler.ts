export async function postResolucionHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  try {
    const create = await postResolucion(data)
    res.status(201).json(create)
  } catch (error) {
    res.send('error.message')
  }
}
export async function getResolucionHandler (_req: Request, res: Response): Promise<void> {
  try {
    const list = await getResolucion()
    res.status(200).json(list)
  } catch (error) {
    res.send('error.message')
  }
}
export async function modifyResolucionHandler (_req: Request, res: Response): Promise<void> {
  try {
    res.send('response')
  } catch (error) {
    res.send('error.message')
  }
}
export async function deleteResolucionHandler (_req: Request, res: Response): Promise<void> {
  try {
    res.send('response')
  } catch (error) {
    res.send('error.message')
  }
}