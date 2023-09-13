import express from 'express'
const matriculaRouter = express.Router()

matriculaRouter.get('/', (_req, res) => {
  res.send('Is getting')
})

matriculaRouter.post('/', (_req, res) => {
  res.send('Is posting')
})
matriculaRouter.put('/', (_req, res) => {
  res.send('Is putting')
})

matriculaRouter.delete('/', (_req, res) => {
  res.send('Is deleted')
})

export default matriculaRouter
