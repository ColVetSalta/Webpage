import { DataTypes } from 'sequelize'
import { sequelize } from '../db'

export const Marticulado = sequelize.define('marticulado', {
  mp: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
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
