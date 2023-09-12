import express from 'express'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Is getting')
})

router.post('/', (_req, res) => {
  res.send('Is posting')
})

export default router
