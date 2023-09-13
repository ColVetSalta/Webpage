import { DataTypes } from 'sequelize'
import { sequelize } from '../db'

export const Organismo = sequelize.define('organismo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  paranoid: true
})
