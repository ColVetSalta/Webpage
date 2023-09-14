"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resolucionRouter = express_1.default.Router();
resolucionRouter.get('/', (_req, res) => {
    res.send('Is getting');
});
resolucionRouter.post('/', (_req, res) => {
    res.send('Is posting');
});
resolucionRouter.put('/', (_req, res) => {
    res.send('Is putting');
});
resolucionRouter.delete('/', (_req, res) => {
    res.send('Is deleted');
});
exports.default = resolucionRouter;
