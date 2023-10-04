import { InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript'
import Marticulado from './Matriculado'

@Table({
  tableName: 'otrodato',
  timestamps: true,
  paranoid: true
})
export default class OtroDato extends Model<InferAttributes<OtroDato>, InferCreationAttributes<OtroDato>> {
  @Column
    titulo: string

  @Column
    descripcion: string

  @ForeignKey(() => Marticulado)
  @Column
    mp: string

  @BelongsTo(() => Marticulado)
    mat: Marticulado
}
