import express from 'express'
const matriculaRouter = express.Router()

matriculaRouter.get('/', (_req, res) => {
  res.send('Is getting Mat')
})

matriculaRouter.post('/', (_req, res) => {
  res.send('Is posting Mat')
})
matriculaRouter.put('/', (_req, res) => {
  res.send('Is putting Mat')
})

matriculaRouter.delete('/', (_req, res) => {
  res.send('Is deleted Mat')
})

export default matriculaRouter
