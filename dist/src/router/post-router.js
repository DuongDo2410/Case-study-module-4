"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_api_1 = __importDefault(require("src/controller/api/post.api"));
const router = require('express').Router();
router.post('/newsPost', post_api_1.default.post);
