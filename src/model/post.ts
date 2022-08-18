import { Schema, model } from "mongoose";
import { IUser } from './user';
import { ILike } from './like';
import { IComment } from './comment';
export interface IPost {
    text?: string;
    createdate?: string;
    user?: IUser;
    like?: ILike;
    comment?: IComment,
    image?: string,
    video?: string,

}

const postSchema = new Schema<IPost>({
    text: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    comment: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    like: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    image: [
        {
            type: String,
        }
    ],
    video: [
        {
            type: String,
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }



}, { timestamps: true })

const Post = model<IPost>('Post', postSchema);
export default Post;
