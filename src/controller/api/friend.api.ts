import { NextFunction, Request, Response } from "express";
import { Friend } from "../../model/friend";

class FriendController {
  addFriend = async (req: any, res: Response) => {
    let friend = {
      iduser: req.decoded.id,
      idfriend: req.body.id,
      status: "pendding",
    };
    await Friend.create(friend);
    res.status(200).json();
  };
  getAllFriendAccepted = async (req: any, res: Response) => {
    let friend = await Friend.find({
      iduser: req.decoded.id,
      status: "accept",
    }).populate("idfriend");
    res.status(200).json(friend);
  };
  getAllFriendPendding = async (req: any, res: Response) => {
    let friend = await Friend.find({
      iduser: req.decoded.id,
      status: "pendding",
    }).populate("idfriend");
    res.status(200).json(friend);
  };
  deleteFriend = async (req: Request, res: Response) => {
    try {
      let id = req.params.id;
      let user = await Friend.findById(id);
      if (!user) {
        res.status(404).json();
      } else {
        let deleteUser = await Friend.findByIdAndDelete(id);
        res.status(200).json(deleteUser);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
  updateFriend = async (req: Request, res: Response) => {
    let id = req.params.id;
    let user = await Friend.findById(id);
    if (!user) {
      res.status(404).json();
    } else {
      let status = req.body.status;
      await Friend.findOneAndUpdate({ _id: id }, { status: status });
      res.status(200).json();
    }
  };
  checkFriend = async (req: any, res: Response) => {
    let iduser = req.decoded.id;
    let idfriend = req.params.id;
    let user = await Friend.find({ iduser: iduser }).find({
      idfriend: idfriend,
    });
    if (!user) {
      res.status(404).json();
    } else {
      res.status(200).json(user);
    }
  };
}
export default new FriendController();
