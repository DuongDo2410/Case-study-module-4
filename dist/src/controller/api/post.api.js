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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = __importDefault(require("../../model/post"));
const user_1 = require("../../model/user");
class postController {
    constructor() {
        this.newPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let newPost = req.body;
                newPost = yield new post_1.default(newPost);
                let newsPost = yield newPost.save();
                if (req.body.user) {
                    const user = user_1.User.findById(req.body.user);
                    yield user.updateOne({ $push: { posts: newsPost._id } });
                }
                res.status(200).json(newsPost);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
        //GET A POST
        this.getAPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                const post = yield post_1.default.findById(id).populate("user");
                res.status(200).json(post);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
        this.updatePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let post = yield post_1.default.findById(id);
                yield (post === null || post === void 0 ? void 0 : post.updateOne({ $set: req.body }));
                res.status(200).json("Successfully updated!");
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
        this.deleteAPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                yield post_1.default.findByIdAndDelete(id);
                res.status(200).json(" Delete successfully!");
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = new postController;
