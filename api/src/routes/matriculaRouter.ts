/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { getMatriculaHandler, postMatriculaHandler } from '../handlers/matriculaHandler'
const matriculaRouter = express.Router()

matriculaRouter.get('/', getMatriculaHandler)

matriculaRouter.post('/', postMatriculaHandler)

matriculaRouter.put('/', (_req, res) => {
  res.send('Is putting Mat')
})

matriculaRouter.delete('/', (_req, res) => {
  res.send('Is deleted Mat')
})

export default matriculaRouter
