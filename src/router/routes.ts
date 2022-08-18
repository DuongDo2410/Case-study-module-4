
import {Router} from "express";
import {userProfileRouter} from "./user-router";
import postController from "./post-router";
import {authRouter} from "./auth-router";
import {friendRouter} from "./friend-router";

export const router=Router();
router.use('/users',userProfileRouter);
router.use('/posts',postController);
router.use('',authRouter);


