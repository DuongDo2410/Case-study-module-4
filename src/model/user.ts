import{Schema,model} from "mongoose";
import {IPost} from "./post";
export interface IUser{
    username:string;
    email?:string;
    password?:string;
    name?:string;
    dob?:string;
    avatar?:string;
    friends?:IUser;
    posts?:IPost
}
const userSchema = new Schema<IUser>({
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name:String,
        dob:String,
        avatar:String,
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post",
            },
        ],
    }
)

const User = model<IUser>('User',userSchema);
export {User};