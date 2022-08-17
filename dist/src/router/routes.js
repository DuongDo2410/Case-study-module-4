"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_router_1 = require("./user-router");
const auth_router_1 = require("./auth-router");
exports.router = (0, express_1.Router)();
exports.router.use('/users', user_router_1.userProfileRouter);
exports.router.use('', auth_router_1.authRouter);
