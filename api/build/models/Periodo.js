"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Periodo = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
exports.Periodo = db_1.sequelize.define('periodo', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    fecha_inicio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fecha_final: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true
});
