"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileRouter = void 0;
const express_1 = require("express");
const user_api_1 = __importDefault(require("../controller/api/user.api"));
const auth_1 = require("../middleware/auth");
exports.userProfileRouter = (0, express_1.Router)();
exports.userProfileRouter.use(auth_1.auth);
exports.userProfileRouter.get("", user_api_1.default.getAllUsers);
exports.userProfileRouter.get("/detail/:id", user_api_1.default.getSingleUser);
exports.userProfileRouter.post("", user_api_1.default.createUser);
exports.userProfileRouter.put("/:id", user_api_1.default.updateUser);
exports.userProfileRouter.get("/search", user_api_1.default.getSingleUserByName);
exports.userProfileRouter.get("/getUserToLocalstorage", user_api_1.default.getUserToLocalStorage);
//update
