import { InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column,
  BelongsToMany,
  ForeignKey,
  BelongsTo,
  DataType
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
  @Column({
    type: DataType.DATE,
    get () {
      return new Date(this.getDataValue('fecha'))
    }
  })
    fecha: string

  @Column({
    type: DataType.TEXT
  })
    visto: string

  @Column({
    type: DataType.TEXT
  })
    considerando: string

  @Column({
    type: DataType.TEXT
  })
    resuelve: string

  @ForeignKey(() => Organismo)
  @Column
    orgid: string

  @BelongsTo(() => Organismo)
    org: Organismo

  @BelongsToMany(() => Periodo, () => Firma)
    firmas: Periodo[]
}
