/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  getOrganismoHandler,
  modifyOrganismoHandler,
  postOrganismoHandler,
  deleteOrganismoHandler
} from '../handlers/organismoHandler'
const organismoRouter = express.Router()

organismoRouter.get('/', getOrganismoHandler)
organismoRouter.get('/:org', getOrganismoHandler)

organismoRouter.post('/', postOrganismoHandler)

organismoRouter.put('/', modifyOrganismoHandler)

organismoRouter.delete('/', deleteOrganismoHandler)

export default organismoRouter
