"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Friend = void 0;
const mongoose_1 = require("mongoose");
const friendSchema = new mongoose_1.Schema({
<<<<<<< HEAD
    iduser: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    idfriend: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    status: {
        type: String
    }
});
const Friend = (0, mongoose_1.model)("Friend", friendSchema);
=======
    idUser: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    idFriend: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    status: String,
});
const Friend = (0, mongoose_1.model)('Friend', friendSchema);
>>>>>>> dev
exports.Friend = Friend;
