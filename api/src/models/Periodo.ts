import {
  Table,
  Model,
  Column
} from 'sequelize-typescript'

@Table({
  tableName: 'periodo',
  timestamps: true,
  paranoid: true
})
export default class Periodo extends Model {
  @Column({
    primaryKey: true
  })
    id: number

  @Column
    fecha_inicio: string

  @Column
    fecha_final: string
}
