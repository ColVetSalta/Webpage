import {
  Table,
  Model,
  Column
} from 'sequelize-typescript'

@Table({
  tableName: 'resolucion',
  timestamps: true,
  paranoid: true
})
export default class Resolucion extends Model {
  @Column({
    primaryKey: true
  })
    id: number

  @Column({ primaryKey: true })
    year: number

  // id_org: {...}. me falta averiguar como declarar el ID de Organizacion como una PK siendo una FK.
  @Column
    fecha: string

  @Column
    visto: string

  @Column
    considerando: string

  @Column
    resuelve: string

  @Column
    firma: string
}
