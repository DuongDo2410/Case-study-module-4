"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FriendController {
    constructor() {
        this.addFriend = (req, res, next) => {
            let idFriend = req.params.id;
            console.log(idFriend);
            console.log(req.decoded);
        };
    }
}
exports.default = new FriendController();
