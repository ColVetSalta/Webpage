import { InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  DataType,
  Table,
  Model,
  Column,
  AllowNull
} from 'sequelize-typescript'

@Table({
  tableName: 'novedad',
  timestamps: true,
  paranoid: true
})
export default class Novedad extends Model<InferAttributes<Novedad>, InferCreationAttributes<Novedad>> {
  @AllowNull(false)
  @Column
    title: string

  @Column({
    type: DataType.TEXT
  })
    image: string

  @Column
    alt: string

  @AllowNull(false)
  @Column({
    type: DataType.ENUM,
    values: ['NOTICIAS', 'ARTICULOS', 'CURSOS', 'EVENTOS', 'ANUNCIOS', 'TRABAJO', 'BOLETIN']
  })
    categoria: string

  @Column
    summary: string

  @Column({
    type: DataType.TEXT
  })
    fulltext: string

  @Column({
    type: DataType.DATE,
    get () {
      return new Date(this.getDataValue('date'))
    }
  })
    date: string

  @Column({
    type: DataType.TEXT
  })
    url: string

  @Column
    destacado: boolean

  @Column
    resaltar: boolean
}
