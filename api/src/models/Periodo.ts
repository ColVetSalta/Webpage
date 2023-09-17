import { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsToMany,
  DataType
} from 'sequelize-typescript'
import Marticulado from './Matriculado'
import Cargo from './Cargo'
import Resolucion from './Resolucion'
import Firma from './Firma'

@Table({
  tableName: 'periodo',
  timestamps: true,
  paranoid: true
})
export default class Periodo extends Model<InferAttributes<Periodo>, InferCreationAttributes<Periodo>> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  })
    id: CreationOptional<number>

  @Column
    fecha_inicio: string

  @Column
    fecha_final: string

  @ForeignKey(() => Marticulado)
  @Column({
    primaryKey: true
  })
    mp: number

  @ForeignKey(() => Cargo)
  @Column({
    primaryKey: true
  })
    cargoId: number

  @BelongsToMany(() => Resolucion, () => Firma)
    firma: CreationOptional<Resolucion[]>
}
