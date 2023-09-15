import { InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column,
  BelongsToMany
} from 'sequelize-typescript'
import Firma from './Firma'
import Periodo from './Periodo'

@Table({
  tableName: 'resolucion',
  timestamps: true,
  paranoid: true
})
export default class Resolucion extends Model<InferAttributes<Resolucion>, InferCreationAttributes<Resolucion>> {
  @Column({
    primaryKey: true
  })
    id: number

  @Column({ primaryKey: true })
    year: number

  // id_org: {...}. me falta averiguar como declarar el ID de Organizacion como una PK siendo una FK.
  @Column
    fecha: string

  @Column
    visto: string

  @Column
    considerando: string

  @Column
    resuelve: string

  @BelongsToMany(() => Periodo, () => Firma)
    firmas: Periodo[]
}