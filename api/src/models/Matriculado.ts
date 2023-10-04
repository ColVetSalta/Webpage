import { InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'
import {
  DataType,
  Table,
  Model,
  Column,
  BelongsToMany,
  HasMany
} from 'sequelize-typescript'
import Cargo from './Cargo'
import Periodo from './Periodo'
import Telefono from './Telefono'
import OtroDato from './OtroDato'

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
    domicilio_particular: string

  @Column
    domicilio_laboral: string

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

  @HasMany(() => Telefono)
    tel: CreationOptional<Telefono[]>

  @HasMany(() => OtroDato)
    dato: CreationOptional<OtroDato[]>

  @BelongsToMany(() => Cargo, () => Periodo)
    cargo: CreationOptional<Array<Cargo & { Periodo: Periodo }>>
}
