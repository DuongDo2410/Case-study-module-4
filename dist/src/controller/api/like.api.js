"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const like_1 = require("../../model/like");
class likeController {
    constructor() {
        this.like = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let userId = req.decoded.id;
                console.log(userId);
                let like = yield like_1.Like.findOne(userId);
                console.log(like);
                yield (like === null || like === void 0 ? void 0 : like.updateOne({ $set: userId }));
                res.status(200).json(like);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = new likeController;
