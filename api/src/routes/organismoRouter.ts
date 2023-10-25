/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  getOrganismoHandler,
  modifyOrganismoHandler,
  postOrganismoHandler,
  deleteOrganismoHandler
} from '../handlers/organismoHandler'
import { newCargoToMatriculaHandler } from '../handlers/cargoHandler'
const organismoRouter = express.Router()

organismoRouter.post('/', postOrganismoHandler)

organismoRouter.get('/', getOrganismoHandler)

organismoRouter.put('/edit/:id', modifyOrganismoHandler)// modify org name or add a cargo to the org.
organismoRouter.put('/:id/cargo/:charge', newCargoToMatriculaHandler)// assign a mp to a cargo and findorcreate a period.

organismoRouter.delete('/:org', deleteOrganismoHandler)

export default organismoRouter
