import { InferAttributes, InferCreationAttributes } from 'sequelize'
import {
  Table,
  Model,
  Column,
  ForeignKey
//   BelongsToMany
} from 'sequelize-typescript'
import Periodo from './Periodo'
import Resolucion from './Resolucion'
// import Marticulado from './Matriculado'
// import Periodo from './Periodo'

@Table({
  tableName: 'firma',
  timestamps: true,
  paranoid: true
})
export default class Firma extends Model<InferAttributes<Firma>, InferCreationAttributes<Firma>> {
  @ForeignKey(() => Periodo)
  @Column
    perid: number

  @ForeignKey(() => Resolucion)
  @Column
    resid: number
}
