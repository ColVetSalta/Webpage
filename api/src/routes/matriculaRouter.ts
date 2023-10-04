/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  getMatriculaHandler,
  modifyMatriculaHandler,
  postMatriculaHandler,
  deleteMatriculaHandler,
  rePostMatriculaHandler
} from '../handlers/matriculaHandler'

const matriculaRouter = express.Router()

matriculaRouter.get('/', getMatriculaHandler)
matriculaRouter.get('/:mp', getMatriculaHandler)

matriculaRouter.post('/', postMatriculaHandler)

matriculaRouter.put('/:mp', modifyMatriculaHandler)
matriculaRouter.put('/reinstatement/:mp', rePostMatriculaHandler)
matriculaRouter.put('/tel/:mp', rePostMatriculaHandler)
matriculaRouter.put('/dato/:mp', rePostMatriculaHandler)

matriculaRouter.delete('/:mp', deleteMatriculaHandler)

export default matriculaRouter
