"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const mongoose_1 = require("mongoose");
const likeSchema = new mongoose_1.Schema({
<<<<<<< HEAD
    icon: String,
    postId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Post",
    },
});
const Like = (0, mongoose_1.model)("Like", likeSchema);
=======
    postId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Post'
    },
});
const Like = (0, mongoose_1.model)('Like', likeSchema);
>>>>>>> thang
exports.Like = Like;
