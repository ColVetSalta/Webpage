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

organismoRouter.put('/edit/:id', modifyOrganismoHandler)
organismoRouter.put('/:id/cargo/:charge', newCargoToMatriculaHandler)

organismoRouter.delete('/', deleteOrganismoHandler)

export default organismoRouter
