/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  getMatriculaHandler,
  modifyMatriculaHandler,
  postMatriculaHandler,
  deleteMatriculaHandler,
  newCargoToMatriculaHandler
} from '../handlers/matriculaHandler'
const matriculaRouter = express.Router()

matriculaRouter.get('/', getMatriculaHandler)
matriculaRouter.get('/:mp', getMatriculaHandler)

matriculaRouter.post('/', postMatriculaHandler)

matriculaRouter.put('/:mp', modifyMatriculaHandler)
matriculaRouter.put('/cargo/:mp', newCargoToMatriculaHandler)

matriculaRouter.delete('/:mp', deleteMatriculaHandler)

export default matriculaRouter
