"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getOneOrg = exports.getAuthorities = void 0;
const API_json_1 = __importDefault(require("./API.json"));
const authority = API_json_1.default.autoridades;
const getAuthorities = () => authority;
exports.getAuthorities = getAuthorities;
const getOneOrg = (org) => {
    const found = authority.consejomayor[org];
    return found;
};
exports.getOneOrg = getOneOrg;
const addEntry = () => undefined;
exports.addEntry = addEntry;
