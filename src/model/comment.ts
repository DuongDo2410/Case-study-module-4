import{Schema,model} from "mongoose";
import {IUser} from './user';

export interface IComment{
    text?:string;
    createdate?:string;
    user?:IUser,
}

export const commentSchema = new Schema<IComment>({
        text: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        user:{
            type:Schema.Types.ObjectId,
            ref:'User'
        }
    },
    {timestamps:true})
const Comment = model<IComment>('Comment',commentSchema);
export {Comment};

