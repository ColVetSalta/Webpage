/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  getNovedadHandler,
  modifyNovedadHandler,
  postNovedadHandler,
  deleteNovedadHandler,
  rePostNovedadHandler
} from '../handlers/novedadHandler'
import { DefaultNovedadList } from '../services/apiServices'

const novedadRouter = express.Router()

novedadRouter.post('/fill', DefaultNovedadList)
novedadRouter.post('/', postNovedadHandler)

novedadRouter.get('/', getNovedadHandler)
novedadRouter.get('/:id', getNovedadHandler)

novedadRouter.put('/reinstatement/:id', rePostNovedadHandler)
novedadRouter.put('/:id', modifyNovedadHandler)

novedadRouter.delete('/:id', deleteNovedadHandler)

export default novedadRouter
