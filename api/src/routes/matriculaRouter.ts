/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  getMatriculaHandler,
  modifyMatriculaHandler,
  postMatriculaHandler,
  deleteMatriculaHandler,
  rePostMatriculaHandler,
  modifyAttachedDataHandler
} from '../handlers/matriculaHandler'
import { DefaultMatriculaList } from '../services/authServices'

const matriculaRouter = express.Router()

matriculaRouter.post('/fill', DefaultMatriculaList)
matriculaRouter.post('/', postMatriculaHandler)

matriculaRouter.get('/', getMatriculaHandler)
matriculaRouter.get('/:mp', getMatriculaHandler)

matriculaRouter.put('/reinstatement/:mp', rePostMatriculaHandler)
matriculaRouter.put('/modify/:mp', modifyAttachedDataHandler)
matriculaRouter.put('/:mp', modifyMatriculaHandler)

matriculaRouter.delete('/:mp', deleteMatriculaHandler)

export default matriculaRouter
