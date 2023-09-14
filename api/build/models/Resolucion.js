"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolucion = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
exports.Resolucion = db_1.sequelize.define('resolucion', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    // id_org: {...}. me falta averiguar como declarar el ID de Organizacion como una PK siendo una FK.
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
