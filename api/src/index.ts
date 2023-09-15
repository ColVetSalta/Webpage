import express from 'express'
import { sequelize } from './db'
import router from './routes'

const app = express()
app.use(express.json())

const { PORT } = process.env

app.get('/', (_req, res) => {
  res.send('Base')
})

app.use('/', router)

void sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Escuchando atte. Puerto: ${PORT as string}`)
  })
})
