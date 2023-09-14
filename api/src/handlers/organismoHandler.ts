

export async function postOrganismoHandler (req: Request, res: Response): Promise<void> {
  const data = req.body
  try {
    const create = await postOrganismo(data)
    res.status(201).json(create)
  } catch (error) {
    res.send('error.message')
  }
}
export async function getOrganismoHandler (_req: Request, res: Response): Promise<void> {
  try {
    const list = await getOrganismo()
    res.status(200).json(list)
  } catch (error) {
    res.send('error.message')
  }
}
export async function modifyOrganismoHandler (_req: Request, res: Response): Promise<void> {
  try {
    res.send('response')
  } catch (error) {
    res.send('error.message')
  }
}
export async function deleteOrganismoHandler (_req: Request, res: Response): Promise<void> {
  try {
    res.send('response')
  } catch (error) {
    res.send('error.message')
  }
}