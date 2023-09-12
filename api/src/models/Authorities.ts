import { DataTypes } from 'sequelize'
import { sequelize } from '../db'

export const Authorities = sequelize.define('Authorities', {
  id: {
    type: DataTypes.STRING(4),
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  correoElectronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: true,
  paranoid: true
})
