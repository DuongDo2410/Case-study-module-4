// import{Schema,model} from "mongoose";

<<<<<<< HEAD
const likeSchema = new Schema({
    icon:String,
    postId:{
        type:Schema.Types.ObjectId,
        ref:'Post'
    }
})
const Like = model('Like',likeSchema);
export {Like};
=======
// const likeSchema = new Schema({
//     postId:{
//         type:Schema.Types.ObjectId,
//         ref:'Post'
//     },
// })
// const Like = model('Like',likeSchema);
// export {Like};
>>>>>>> thang
