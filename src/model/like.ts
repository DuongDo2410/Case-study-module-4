import { Schema, model } from "mongoose";

const likeSchema = new Schema({
  icon: String,
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});

const Like = model("Like", likeSchema);
export { Like };
