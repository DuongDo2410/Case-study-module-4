"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import likeController from '../controller/api/like.api';
const post_api_1 = __importDefault(require("../controller/api/post.api"));
const routerLike = require('express').Router();
//LIKE POST
routerLike.post('/:id', post_api_1.default.likeAPost);
exports.default = routerLike;
