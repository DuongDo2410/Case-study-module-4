
import {Router} from "express";
import {userProfileRouter} from "./user-router";
import {authRouter} from "./auth-router";
import commentController from "./comment-router"
import {friendRouter} from "./friend-router";
import routerPost from "./post-router";
export const router=Router();


router.use('/users',userProfileRouter);
router.use('/posts',routerPost);
router.use('',authRouter);


