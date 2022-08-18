import { Router } from "express";
import { auth } from "src/middleware/auth";
import postController from "../controller/api/post.api";
const router = require("express").Router();

router.user(auth);
//ADD POST
router.post("", postController.newPost);

//UPDATE POST
router.put("/:id", postController.updatePost);

//GET A POST
router.get("/:id", postController.getAPost);

//DELETE POST
router.delete("/:id", postController.deleteAPost);

export default router;
