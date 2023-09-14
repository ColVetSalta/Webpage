import {
  Table,
  Model,
  Column
} from 'sequelize-typescript'

@Table({
  tableName: 'organismo',
  timestamps: true,
  paranoid: true
})
export default class Organismo extends Model {
  @Column({
    primaryKey: true
  })
    id: string

  @Column
    nombre: string
}
