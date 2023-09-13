import { DataTypes } from 'sequelize'
import { sequelize } from '../db'

export const Periodo = sequelize.define('periodo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  fecha_inicio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_final: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  paranoid: true
})
