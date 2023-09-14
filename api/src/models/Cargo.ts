import {
  Table,
  Model,
  Column
} from 'sequelize-typescript'

@Table({
  tableName: 'cargo',
  timestamps: true,
  paranoid: true
})
export default class Cargo extends Model {
  @Column({
    primaryKey: true
  })
    id: number

  @Column
    nombre: string
}
