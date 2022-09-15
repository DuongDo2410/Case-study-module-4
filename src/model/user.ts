import { Schema, model } from "mongoose";
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  dob: String,
  avatar: String,
  friend: [
    {
      type: Schema.Types.ObjectId,
      ref: "Friend",
    },
  ],
});

const User = model("User", userSchema);
export { User };
