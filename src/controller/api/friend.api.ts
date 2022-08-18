import {NextFunction, Request, Response} from "express";


class FriendController{
    addFriend=(req:any,res:Response,next:NextFunction)=>{
        let idFriend = req.params.id
        console.log(idFriend)
        console.log(req.decoded)
    }
}
export default new FriendController();