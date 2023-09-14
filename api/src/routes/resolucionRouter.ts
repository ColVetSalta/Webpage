/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
const resolucionRouter = express.Router()

resolucionRouter.get('/', (_req, res) => {
  res.send('Is getting Res')
})

resolucionRouter.post('/', (_req, res) => {
  res.send('Is posting Res')
})
resolucionRouter.put('/', (_req, res) => {
  res.send('Is putting Res')
})

resolucionRouter.delete('/', (_req, res) => {
  res.send('Is deleted Res')
})

export default resolucionRouter
