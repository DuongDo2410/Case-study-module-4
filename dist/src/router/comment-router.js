"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCommnet = void 0;
const express_1 = require("express");
const comment_api_1 = __importDefault(require("../controller/api/comment.api"));
exports.routerCommnet = (0, express_1.Router)();
//  ADD COMMENT
exports.routerCommnet.post("", comment_api_1.default.addComment);
exports.routerCommnet.get("/:id", comment_api_1.default.getComment);
//UPDATE COMMENT
exports.routerCommnet.put("/:id", comment_api_1.default.updateComment);
//DELETE COMMENT
exports.routerCommnet.delete("/:id", comment_api_1.default.deleteComment);
exports.default = exports.routerCommnet;
