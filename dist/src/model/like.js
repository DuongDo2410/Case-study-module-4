"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const mongoose_1 = require("mongoose");
const likeSchema = new mongoose_1.Schema({
    icon: String,
    postId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Post'
    }
});
const Like = (0, mongoose_1.model)('Like', likeSchema);
exports.Like = Like;
=======
// import{Schema,model} from "mongoose";
// const likeSchema = new Schema({
//     postId:{
//         type:Schema.Types.ObjectId,
//         ref:'Post'
//     },
// })
// const Like = model('Like',likeSchema);
// export {Like};
>>>>>>> thang
