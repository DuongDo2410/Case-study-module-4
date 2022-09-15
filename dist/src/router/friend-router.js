"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendRouter = void 0;
const express_1 = require("express");
const friend_api_1 = __importDefault(require("../controller/api/friend.api"));
const auth_1 = require("../middleware/auth");
exports.friendRouter = (0, express_1.Router)();
exports.friendRouter.use(auth_1.auth);
exports.friendRouter.put("/friend/:id", friend_api_1.default.updateFriend);
exports.friendRouter.post("/friend/addFriend", friend_api_1.default.addFriend);
exports.friendRouter.get("/friendAccepted", friend_api_1.default.getAllFriendAccepted);
exports.friendRouter.get("/friendPendding", friend_api_1.default.getAllFriendPendding);
exports.friendRouter.delete("/friend/:id", friend_api_1.default.deleteFriend);
exports.friendRouter.get("/friend/checkFriend/:id", friend_api_1.default.checkFriend);
