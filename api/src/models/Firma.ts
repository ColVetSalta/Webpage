import { InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column
//   BelongsToMany
} from 'sequelize-typescript'
// import Marticulado from './Matriculado'
// import Periodo from './Periodo'

@Table({
  tableName: 'firma',
  timestamps: true,
  paranoid: true
})
export default class Firma extends Model<InferAttributes<Firma>, InferCreationAttributes<Firma>> {
  @Column({
    primaryKey: true
  })
    id: number
}
