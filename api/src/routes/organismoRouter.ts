import express from 'express'
const organismoRouter = express.Router()

organismoRouter.get('/', (_req, res) => {
  res.send('Is getting')
})

organismoRouter.post('/', (_req, res) => {
  res.send('Is posting')
})
organismoRouter.put('/', (_req, res) => {
  res.send('Is putting')
})

organismoRouter.delete('/', (_req, res) => {
  res.send('Is deleted')
})

export default organismoRouter
