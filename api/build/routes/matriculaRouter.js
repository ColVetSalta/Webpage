"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const matriculaRouter = express_1.default.Router();
matriculaRouter.get('/', (_req, res) => {
    res.send('Is getting');
});
matriculaRouter.post('/', (_req, res) => {
    res.send('Is posting');
});
matriculaRouter.put('/', (_req, res) => {
    res.send('Is putting');
});
matriculaRouter.delete('/', (_req, res) => {
    res.send('Is deleted');
});
exports.default = matriculaRouter;
