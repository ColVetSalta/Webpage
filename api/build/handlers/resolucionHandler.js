"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResolucionHandler = exports.modifyResolucionHandler = exports.getResolucionHandler = exports.postResolucionHandler = void 0;
const postResolucionHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('response');
    }
    catch (error) {
        res.send('error.message');
    }
});
exports.postResolucionHandler = postResolucionHandler;
const getResolucionHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('response');
    }
    catch (error) {
        res.send('error.message');
    }
});
exports.getResolucionHandler = getResolucionHandler;
const modifyResolucionHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('response');
    }
    catch (error) {
        res.send('error.message');
    }
});
exports.modifyResolucionHandler = modifyResolucionHandler;
const deleteResolucionHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('response');
    }
    catch (error) {
        res.send('error.message');
    }
});
exports.deleteResolucionHandler = deleteResolucionHandler;
