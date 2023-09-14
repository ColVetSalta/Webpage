"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organismo = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
exports.Organismo = db_1.sequelize.define('organismo', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true
});
