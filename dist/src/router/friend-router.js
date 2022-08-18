"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendRouter = void 0;
const express_1 = require("express");
const friend_api_1 = __importDefault(require("../controller/api/friend.api"));
exports.friendRouter = (0, express_1.Router)();
exports.friendRouter.post('/friend/:id', friend_api_1.default.addFriend);
