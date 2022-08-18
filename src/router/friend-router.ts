import {Router} from "express";
import FriendController from"../controller/api/friend.api"
export const friendRouter = Router();

friendRouter.post('/friend/:id',FriendController.addFriend)