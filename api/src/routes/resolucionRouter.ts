import express from 'express'
const resolucionRouter = express.Router()

resolucionRouter.get('/', (_req, res) => {
  res.send('Is getting')
})

resolucionRouter.post('/', (_req, res) => {
  res.send('Is posting')
})
resolucionRouter.put('/', (_req, res) => {
  res.send('Is putting')
})

resolucionRouter.delete('/', (_req, res) => {
  res.send('Is deleted')
})

export default resolucionRouter
