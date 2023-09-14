"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const matriculaRouter_1 = __importDefault(require("./routes/matriculaRouter"));
const authServices_1 = require("./services/authServices");
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3001;
app.get('/authorities', (_req, res) => {
    console.log('¿quien dijo uno?' + new Date().toLocaleDateString());
    const rta = (0, authServices_1.getAuthorities)();
    res.send(rta);
});
app.get('/authorities/:org', (req, res) => {
    const org = req.params.org;
    const rta = (0, authServices_1.getOneOrg)(org);
    res.send(rta);
});
app.use('/authorities', matriculaRouter_1.default);
void db_1.sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Escuchando atte. Puerto: ${PORT}`);
    });
});
