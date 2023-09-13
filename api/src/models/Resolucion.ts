import { DataTypes } from 'sequelize'
import { sequelize } from '../db'

export const Resolucion = sequelize.define('resolucion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  year: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  // id_org: {...}. me falta averiguar como declarar el ID de Organizacion como una PK siendo una FK.
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  f_nacimiento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
  paranoid: true
})
