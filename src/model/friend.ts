import {Schema,model} from "mongoose";
const friendSchema = new Schema({
    idUser:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    idFriend:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    status:String,
})
const Friend = model('Friend',friendSchema);
export {Friend}