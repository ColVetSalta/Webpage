import { Sequelize } from 'sequelize'
import * as fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'

const {
  DB_USER, DB_PASSWORD, DB_HOST
} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER as string}:${DB_PASSWORD as string}@${DB_HOST as string}/food`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false // lets Sequelize know we can use pg-native for ~30% more speed
})

const basename = path.basename(__filename)

const modelDefiners: Array< (NodeRequire | undefined)> = []
// const modelDefiners: Array<(sequelize: Sequelize) => ModelType> = []

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(createRequire(path.join(__dirname, '/models', file)))
  })

// Inyectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => (model != null) ? model(sequelize as unknown as string) : undefined)
// Capitalizamos los nombres de los modelos ie: product => Product

Object.keys(sequelize.models).forEach((modelName) => {
  const model = sequelize.models[modelName]
  const capitalizedModelName = model.name[0].toUpperCase() + model.name.slice(1)
  sequelize.models[capitalizedModelName] = model
})
// Aca vendrían las relaciones
// const { Recipe, Diets } = sequelize.models as { Recipe: ModelType, Diets: ModelType };

export default sequelize.models
export { sequelize }
