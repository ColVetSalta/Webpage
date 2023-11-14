import { InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  DataType,
  Table,
  Model,
  Column
} from 'sequelize-typescript'

@Table({
  tableName: 'novedad',
  timestamps: true,
  paranoid: true
})
export default class Novedad extends Model<InferAttributes<Novedad>, InferCreationAttributes<Novedad>> {
  @Column
    title: string

  @Column
    image: string

  @Column
    alt: string

  @Column
    summary: string

  @Column({
    type: DataType.TEXT
  })
    fulltext: string

  @Column({
    type: DataType.DATE,
    get () {
      return new Date(this.getDataValue('fecha'))
    }
  })
    date: string

  @Column
    url: string
}
