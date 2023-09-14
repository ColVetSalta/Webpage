import express from 'express'
const resolucionRouter = express.Router()

const ruote = '/resoluciones'

resolucionRouter.get(ruote, (_req, res) => {
  res.send('Is getting Res')
})

resolucionRouter.post(ruote, (_req, res) => {
  res.send('Is posting Res')
})
resolucionRouter.put(ruote, (_req, res) => {
  res.send('Is putting Res')
})

resolucionRouter.delete(ruote, (_req, res) => {
  res.send('Is deleted Res')
})

export default resolucionRouter
