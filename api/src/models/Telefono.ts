import { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript'
import Marticulado from './Matriculado'

@Table({
  tableName: 'telefono',
  timestamps: true,
  paranoid: true
})
export default class Telefono extends Model<InferAttributes<Telefono>, InferCreationAttributes<Telefono>> {
  @Column
    numero: string

  @Column
    whatsapp: boolean

  @Column
    principal: boolean

  @Column
    descripcion: CreationOptional<string>

  @ForeignKey(() => Marticulado)
  @Column
    mp: number

  @BelongsTo(() => Marticulado)
    mat: Marticulado
}
