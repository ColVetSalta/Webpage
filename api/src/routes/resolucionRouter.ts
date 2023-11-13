/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  postResolucionHandler,
  getResolucionHandler,
  modifyResolucionHandler,
  deleteResolucionHandler
} from '../handlers/resolucionHandler'
const resolucionRouter = express.Router()

resolucionRouter.post('/', postResolucionHandler)

resolucionRouter.get('/:resolucion', getResolucionHandler)

resolucionRouter.put('/', modifyResolucionHandler)
resolucionRouter.put('/:id', modifyResolucionHandler)

resolucionRouter.delete('/:id', deleteResolucionHandler)

export default resolucionRouter
