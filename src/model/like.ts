import{Schema,model} from "mongoose";

const likeSchema = new Schema({
    icon:String,
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})
const Like = model('Like',likeSchema);
export {Like};