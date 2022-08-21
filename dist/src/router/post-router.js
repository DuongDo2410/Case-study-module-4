"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_api_1 = __importDefault(require("../controller/api/post.api"));
const routerPost = require('express').Router();
//ADD POST
routerPost.post('', post_api_1.default.newPost);
//UPDATE POST
routerPost.put('/:id', post_api_1.default.updatePost);
//DELETE POST
routerPost.delete('/:id', post_api_1.default.deleteAPost);
//GET POST
routerPost.get('/:id', post_api_1.default.getPost);
exports.default = routerPost;
