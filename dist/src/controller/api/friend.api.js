"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const friend_1 = require("../../model/friend");
class FriendController {
    constructor() {
        this.addFriend = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let friend = {
                iduser: req.decoded.id,
                idfriend: req.body.id,
                status: "pendding",
            };
            yield friend_1.Friend.create(friend);
            res.status(200).json();
        });
        this.getAllFriendAccepted = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let friend = yield friend_1.Friend.find({
                iduser: req.decoded.id,
                status: "accept",
            }).populate("idfriend");
            res.status(200).json(friend);
        });
        this.getAllFriendPendding = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let friend = yield friend_1.Friend.find({
                iduser: req.decoded.id,
                status: "pendding",
            }).populate("idfriend");
            res.status(200).json(friend);
        });
        this.deleteFriend = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let user = yield friend_1.Friend.findById(id);
                if (!user) {
                    res.status(404).json();
                }
                else {
                    let deleteUser = yield friend_1.Friend.findByIdAndDelete(id);
                    res.status(200).json(deleteUser);
                }
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
        this.updateFriend = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let user = yield friend_1.Friend.findById(id);
            if (!user) {
                res.status(404).json();
            }
            else {
                let status = req.body.status;
                yield friend_1.Friend.findOneAndUpdate({ _id: id }, { status: status });
                res.status(200).json();
            }
        });
        this.checkFriend = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let iduser = req.decoded.id;
            let idfriend = req.params.id;
            let user = yield friend_1.Friend.find({ iduser: iduser }).find({
                idfriend: idfriend,
            });
            if (!user) {
                res.status(404).json();
            }
            else {
                res.status(200).json(user);
            }
        });
    }
}
exports.default = new FriendController();
