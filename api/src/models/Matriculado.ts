import { InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'
import {
  DataType,
  Table,
  Model,
  Column,
  BelongsToMany
} from 'sequelize-typescript'
import Cargo from './Cargo'
import Periodo from './Periodo'

@Table({
  tableName: 'matriculado',
  timestamps: true,
  paranoid: true
})
export default class Matriculado extends Model<InferAttributes<Matriculado>, InferCreationAttributes<Matriculado>> {
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

  @Column({
    type: DataType.DATE,
    get () {
      return new Date(this.getDataValue('f_nacimiento'))
    }
  })
    f_nacimiento: string

  @Column
    direccion: string

  @Column({
    type: DataType.DATE,
    get () {
      return new Date(this.getDataValue('f_alta'))
    }
  })
    f_alta: CreationOptional<string>

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true
  })
    active: CreationOptional<boolean>

  @BelongsToMany(() => Cargo, () => Periodo)
    cargo: CreationOptional<Array<Cargo & { Periodo: Periodo }>>
}
