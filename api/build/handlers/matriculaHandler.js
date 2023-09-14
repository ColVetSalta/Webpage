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
exports.deleteMatriculaHandler = exports.modifyMatriculaHandler = exports.getMatriculaHandler = exports.postMatriculaHandler = void 0;
const postMatriculaHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('response');
    }
    catch (error) {
        res.send('error.message');
    }
});
exports.postMatriculaHandler = postMatriculaHandler;
const getMatriculaHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('response');
    }
    catch (error) {
        res.send('error.message');
    }
});
exports.getMatriculaHandler = getMatriculaHandler;
const modifyMatriculaHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('response');
    }
    catch (error) {
        res.send('error.message');
    }
});
exports.modifyMatriculaHandler = modifyMatriculaHandler;
const deleteMatriculaHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('response');
    }
    catch (error) {
        res.send('error.message');
    }
});
exports.deleteMatriculaHandler = deleteMatriculaHandler;
