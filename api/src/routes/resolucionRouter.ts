/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  postResolucionHandler,
  getResolucionHandler,
  modifyResolucionHandler,
  deleteResolucionHandler
} from '../handlers/resolucionHandler'
const resolucionRouter = express.Router()

resolucionRouter.get('/', getResolucionHandler)

resolucionRouter.post('/', postResolucionHandler)

resolucionRouter.put('/', modifyResolucionHandler)
resolucionRouter.put('/:id', modifyResolucionHandler)

resolucionRouter.delete('/:id', deleteResolucionHandler)

export default resolucionRouter
