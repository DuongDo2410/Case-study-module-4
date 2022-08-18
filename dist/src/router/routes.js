"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_router_1 = require("./user-router");
const post_router_1 = __importDefault(require("./post-router"));
const auth_router_1 = require("./auth-router");
exports.router = (0, express_1.Router)();
exports.router.use('/users', user_router_1.userProfileRouter);
exports.router.use('/posts', post_router_1.default);
exports.router.use('', auth_router_1.authRouter);
