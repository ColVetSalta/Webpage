import express from 'express'
import authorities from './routes/authorities'
import { getAuthorities, getOneOrg } from './services/authServices'

const app = express()
app.use(express.json())

const PORT = 3001

app.get('/authorities', (_req, res) => {
  console.log('¿quien dijo uno?' + new Date().toLocaleDateString())
  const rta = getAuthorities()
  res.send(rta)
})
app.get('/authorities/:org', (req, res) => {
  const org = req.params.org
  const rta = getOneOrg(org)
  res.send(rta)
})

app.use('/authorities', authorities)

app.listen(PORT, () => {
  console.log(`Escuchando atte. Puerto: ${PORT}`)
})
