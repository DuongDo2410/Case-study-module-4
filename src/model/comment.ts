import{Schema,model} from "mongoose";
export const commentSchema = new Schema({
        text: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        user:{
            type:Schema.Types.ObjectId,
            ref:'User'
        },
        post:{
            type: Schema.Types.ObjectId,
            ref:"Post"
        }

    },
    {timestamps:true})

const Comment = model('Comment',commentSchema);
export default Comment;


