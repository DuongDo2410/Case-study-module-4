import {Router} from "express";
import UserController from "../controller/api/user.api";

export const userProfileRouter = Router();

userProfileRouter.get('',UserController.getAllUsers);
userProfileRouter.get('/:id',UserController.getSingleUser);
userProfileRouter.post('',UserController.createUser);
userProfileRouter.put('/:id',UserController.updateUser)