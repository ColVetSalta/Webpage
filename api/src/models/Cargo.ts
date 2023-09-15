import { InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column
} from 'sequelize-typescript'

@Table({
  tableName: 'cargo',
  timestamps: true,
  paranoid: true
})
export default class Cargo extends Model<InferAttributes<Cargo>, InferCreationAttributes<Cargo>> {
  @Column({
    primaryKey: true
  })
    id: number

  @Column
    nombre: string
}
