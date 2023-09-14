import {
  DataType,
  Table,
  Model,
  Column
} from 'sequelize-typescript'

@Table({
  tableName: 'marticulado',
  timestamps: true,
  paranoid: true
})
export default class Marticulado extends Model {
  @Column({
    primaryKey: true
  })
    mp: number

  @Column
    nombre: string

  @Column
    apellido: string

  @Column
    telefono: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true
  })
    correo_electronico: string

  @Column
    f_nacimiento: string

  @Column
    direccion: string
}
