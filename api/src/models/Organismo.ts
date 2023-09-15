import { InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column
} from 'sequelize-typescript'

@Table({
  tableName: 'organismo',
  timestamps: true,
  paranoid: true
})
export default class Organismo extends Model<InferAttributes<Organismo>, InferCreationAttributes<Organismo>> {
  @Column({
    primaryKey: true
  })
    id: string

  @Column
    nombre: string
}
