/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
const organismoRouter = express.Router()

organismoRouter.get('/', (_req, res) => {
  res.send('Is getting Org')
})

organismoRouter.post('/', (_req, res) => {
  res.send('Is posting Org')
})
organismoRouter.put('/', (_req, res) => {
  res.send('Is putting Org')
})

organismoRouter.delete('/', (_req, res) => {
  res.send('Is deleted Org')
})

export default organismoRouter
