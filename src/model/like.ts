import{Schema,model} from "mongoose";
import {IUser} from './user';

export interface ILike{
    icon?:string;
    user?:IUser
}
const likeSchema = new Schema<ILike>({
    icon:String,
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})
const Like = model<ILike>('Like',likeSchema);
export {Like};