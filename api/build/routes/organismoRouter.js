"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const organismoRouter = express_1.default.Router();
organismoRouter.get('/', (_req, res) => {
    res.send('Is getting');
});
organismoRouter.post('/', (_req, res) => {
    res.send('Is posting');
});
organismoRouter.put('/', (_req, res) => {
    res.send('Is putting');
});
organismoRouter.delete('/', (_req, res) => {
    res.send('Is deleted');
});
exports.default = organismoRouter;
