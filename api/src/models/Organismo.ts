import { InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column,
  HasMany
} from 'sequelize-typescript'
import Cargo from './Cargo'
import Resolucion from './Resolucion'

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

  @HasMany(() => Cargo)
    miembros: Cargo[]

  @HasMany(() => Resolucion)
    resoluciones: Resolucion[]
}
