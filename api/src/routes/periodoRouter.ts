/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  getPeriodoHandler,
  modifyPeriodoHandler,
  postPeriodoHandler,
  deletePeriodoHandler
} from '../handlers/periodoHandler'
const PeriodoRouter = express.Router()

PeriodoRouter.get('/', getPeriodoHandler)
PeriodoRouter.get('/:mp', getPeriodoHandler)

PeriodoRouter.post('/', postPeriodoHandler)

PeriodoRouter.put('/:mp', modifyPeriodoHandler)

PeriodoRouter.delete('/:mp', deletePeriodoHandler)

export default PeriodoRouter
