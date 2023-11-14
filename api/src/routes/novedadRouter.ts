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
import { DefaultMatriculaList } from '../services/apiServices'

const novedadRouter = express.Router()

novedadRouter.post('/fill', DefaultMatriculaList)
novedadRouter.post('/', postMatriculaHandler)

novedadRouter.get('/', getMatriculaHandler)
novedadRouter.get('/:mp', getMatriculaHandler)

novedadRouter.put('/reinstatement/:mp', rePostMatriculaHandler)
novedadRouter.put('/modify/:mp', modifyAttachedDataHandler)
novedadRouter.put('/:mp', modifyMatriculaHandler)

novedadRouter.delete('/:mp', deleteMatriculaHandler)

export default novedadRouter
