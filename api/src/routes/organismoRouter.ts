/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  getOrganismoHandler,
  modifyOrganismoHandler,
  postOrganismoHandler,
  deleteOrganismoHandler
} from '../handlers/organismoHandler'
const organismoRouter = express.Router()

organismoRouter.post('/', postOrganismoHandler)

organismoRouter.get('/', getOrganismoHandler)

organismoRouter.put('/', modifyOrganismoHandler)

organismoRouter.delete('/', deleteOrganismoHandler)

export default organismoRouter
