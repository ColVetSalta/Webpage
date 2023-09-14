"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marticulado = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
exports.Marticulado = db_1.sequelize.define('marticulado', {
    mp: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    correo_electronico: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    f_nacimiento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    paranoid: true
});
