import { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsToMany,
  DataType
} from 'sequelize-typescript'
import Matriculado from './Matriculado'
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
    id: number

  @Column({
    get () {
      return new Date(this.getDataValue('fecha_inicio'))
    }
  })
    fecha_inicio: Date

  @Column({
    get () {
      return new Date(this.getDataValue('fecha_final'))
    }
  })
    fecha_final: Date

  @ForeignKey(() => Matriculado)
  @Column
    mp: number

  @ForeignKey(() => Cargo)
  @Column
    cargoid: number

  @BelongsToMany(() => Resolucion, () => Firma)
    firma: CreationOptional<Resolucion[]>
}
