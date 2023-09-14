import { Sequelize } from 'sequelize-typescript'
// import * as fs from 'node:fs'
import path from 'node:path'
// import { createRequire } from 'node:module'

const {
  DB_USER, DB_PASSWORD, DB_HOST
} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER as string}:${DB_PASSWORD as string}@${DB_HOST as string}/food`, {
  // logging: false, // set to console.log to see the raw SQL queries
  // native: false // lets Sequelize know we can use pg-native for ~30% more speed?
})

sequelize.addModels([path.join(__dirname, '/models')])
// const basename = path.basename(__filename)

// const modelDefiners: Array< (NodeRequire | undefined)> = []

// // take all models created from directory.
// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(createRequire(path.join(__dirname, '/models', file)))
//   })

// // Connect Sequelize to all models.
// modelDefiners.forEach(model => (model != null) ? model(sequelize as unknown as string) : undefined)

// // First Capital letter ie: product => Product
// Object.keys(sequelize.models).forEach((modelName) => {
//   const model = sequelize.models[modelName]
//   const capitalizedModelName = model.name[0].toUpperCase() + model.name.slice(1)
//   sequelize.models[capitalizedModelName] = model
// })

// destructure elements to use easier.
// const { Cargo, Matriculado, Organismo, Periodo, Resolucion } = sequelize.models

// // Model's relations:
// Matriculado.belongsToMany(Cargo, { through: 'periodo', foreignKey: 'mp' })
// Cargo.belongsToMany(Matriculado, { through: 'periodo', foreignKey: 'cargo_id' })

// Periodo.belongsToMany(Resolucion, { through: 'firmas', foreignKey: 'firma' })
// Resolucion.belongsToMany(Periodo, { through: 'firmas', foreignKey: 'resuelve' })

// Organismo.hasMany(Cargo, { foreignKey: 'org_id' })
// Organismo.hasMany(Resolucion, { foreignKey: 'org_id' })

export default sequelize.models
export { sequelize }
