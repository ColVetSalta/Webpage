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
    id: number

  @Column({
    type: DataType.DATE,
    get () {
      return new Date(this.getDataValue('fecha_inicio'))
    }
  })
    fecha_inicio: string

  @Column({
    type: DataType.DATE,
    get () {
      return new Date(this.getDataValue('fecha_final'))
    }
  })
    fecha_final: string

  @ForeignKey(() => Marticulado)
  @Column({
    type: DataType.INTEGER
  })
    mp: CreationOptional<number>

  @ForeignKey(() => Cargo)
  @Column
    cargoid: number

  @BelongsToMany(() => Resolucion, () => Firma)
    firma: CreationOptional<Resolucion[]>
}
