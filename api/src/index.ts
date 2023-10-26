import express from 'express'
import { sequelize } from './db'
import router from './routes'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const { PORT } = process.env

app.get('/', (_req, res) => {
  res.send('Base')
})

app.use('/', router)

void sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Escuchando atte. Puerto: ${PORT as string}`)
  })
})
