import {Router} from "express";
import {userProfileRouter} from "./user-router";
import {authRouter} from "./auth-router";


export const router=Router();
router.use('/users',userProfileRouter);
router.use('',authRouter);
