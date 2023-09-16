import { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column,
  BelongsToMany,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript'
import Marticulado from './Matriculado'
import Periodo from './Periodo'
import Organismo from './Organismo'

@Table({
  tableName: 'cargo',
  timestamps: true,
  paranoid: true
})
export default class Cargo extends Model<InferAttributes<Cargo>, InferCreationAttributes<Cargo>> {
  @Column
    nombre: string

  @ForeignKey(() => Organismo)
  @Column
    orgId: string

  @BelongsTo(() => Organismo)
    org: Organismo

  @BelongsToMany(() => Marticulado, () => Periodo)
    mp: CreationOptional<Marticulado[]>
}
