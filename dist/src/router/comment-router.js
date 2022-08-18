"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_api_1 = __importDefault(require("../controller/api/comment.api"));
const routerCommnet = require('express').Router();
//  ADD COMMENT
routerCommnet.post('/:id', comment_api_1.default.addComment);
exports.default = routerCommnet;
