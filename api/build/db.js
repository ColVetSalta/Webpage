"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const fs = __importStar(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const node_module_1 = require("node:module");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new sequelize_typescript_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`, {
    logging: false,
    native: false // lets Sequelize know we can use pg-native for ~30% more speed?
});
exports.sequelize = sequelize;
const basename = node_path_1.default.basename(__filename);
const modelDefiners = [];
// take all models created from directory.
fs.readdirSync(node_path_1.default.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
    modelDefiners.push((0, node_module_1.createRequire)(node_path_1.default.join(__dirname, '/models', file)));
});
// Connect Sequelize to all models.
modelDefiners.forEach(model => (model != null) ? model(sequelize) : undefined);
// First Capital letter ie: product => Product
Object.keys(sequelize.models).forEach((modelName) => {
    const model = sequelize.models[modelName];
    const capitalizedModelName = model.name[0].toUpperCase() + model.name.slice(1);
    sequelize.models[capitalizedModelName] = model;
});
// destructure elements to use easier.
const { Cargo, Matriculado, Organismo, Periodo, Resolucion } = sequelize.models;
// Model's relations:
Matriculado.belongsToMany(Cargo, { through: 'periodo', foreignKey: 'mp' });
Cargo.belongsToMany(Matriculado, { through: 'periodo', foreignKey: 'cargo_id' });
Periodo.belongsToMany(Resolucion, { through: 'firmas', foreignKey: 'firma' });
Resolucion.belongsToMany(Periodo, { through: 'firmas', foreignKey: 'resuelve' });
Organismo.hasMany(Cargo, { foreignKey: 'org_id' });
Organismo.hasMany(Resolucion, { foreignKey: 'org_id' });
exports.default = sequelize.models;
