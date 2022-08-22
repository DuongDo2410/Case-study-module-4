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
// import Post from 'src/model/post';
const like_1 = require("../../model/like");
class likeController {
    like(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const like = yield like_1.Like.findOne({ postId: req.params.id }).populate('userId');
                if (like) {
                    let listUserLike = like.userId;
                    let idUserLike = req.decoded.id;
                    let index = -1;
                    if (listUserLike) {
                        let statusUserLiked = false;
                        for (let i = 0; i < listUserLike.length; i++) {
                            if (listUserLike[i]._id == idUserLike) {
                                statusUserLiked = true;
                                index = i;
                                break;
                            }
                        }
                        if (statusUserLiked) {
                            // DELETE
                            listUserLike.splice(index, 1);
                            yield like.save();
                            res.status(200).json('UnLike successfully');
                        }
                        else {
                            like.userId.push(idUserLike);
                            yield like.save();
                            res.status(200).json('Like successfully');
                        }
                    }
                    let count = listUserLike.length;
                    res.status(200).json(count);
                }
                else {
                    let like = {
                        userId: req.decoded.id,
                        postId: req.params.id
                    };
                    yield like_1.Like.create(like);
                    return res.status(200).json('Like successfully created');
                }
            }
            catch (error) {
                res.status(500).json(error.message);
            }
        });
    }
}
exports.default = new likeController;
