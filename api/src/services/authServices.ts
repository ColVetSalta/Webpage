import InstData from './API.json'
import {
  // Organismo,
  Inst, Organismo
} from '../types'

const authority: Inst = InstData.autoridades
export const getAuthorities = (): Inst => authority
export const getOneOrg = (org: string): Organismo => {
  const found: Organismo = authority.consejomayor[org]
  return found
}

export const addEntry = (): undefined => undefined
