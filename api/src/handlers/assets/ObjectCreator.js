import { getOrganismo } from '../../controllers/organismoController.ts'
export async function OrgObject (list, date) {
  const fullList = {}
  await Promise.all(
    list.map(async (or) => {
      console.log(or.nombre)
      Object.assign(fullList, await getOrganismo(or.nombre, date))
      console.log(fullList)
    })
  )
  return fullList
}
