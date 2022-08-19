"use strict";
// import{Schema,model} from "mongoose";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const likeSchema = new Schema({
    icon: String,
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
});
const Like = model('Like', likeSchema);
exports.Like = Like;
