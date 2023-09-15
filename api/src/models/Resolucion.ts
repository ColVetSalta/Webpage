import { InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column,
  BelongsToMany,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript'
import Firma from './Firma'
import Periodo from './Periodo'
import Organismo from './Organismo'

@Table({
  tableName: 'resolucion',
  timestamps: true,
  paranoid: true
})
export default class Resolucion extends Model<InferAttributes<Resolucion>, InferCreationAttributes<Resolucion>> {
  @Column
    num: number

  @Column
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

  @ForeignKey(() => Organismo)
  @Column
    orgId: number

  @BelongsTo(() => Organismo)
    org: Organismo

  @BelongsToMany(() => Periodo, () => Firma)
    firmas: Periodo[]
}
