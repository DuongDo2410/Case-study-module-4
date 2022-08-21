
import {Router} from "express";
import {userProfileRouter} from "./user-router";
import {authRouter} from "./auth-router";
import routerPost from "./post-router";
import routerLike from "./like-router";
import routerCommnet from "./comment-router";


export const router=Router();

router.use('/users',userProfileRouter);
router.use('/posts',routerPost);

//LIKE ROUTER
router.use('/likes',routerLike);

//COMMENT ROUTER
router.use('/comments',routerCommnet)

router.use('',authRouter);

