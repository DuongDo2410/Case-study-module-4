import { Router } from "express";
import postController from "../controller/api/post.api";
import routerLike from "./like-router";
import { auth } from "../middleware/auth";

const routerPost = Router();

//COMMENT ROUTER
// routerPost.use('/comments',routerCommnet)

//LIKE ROUTER
// routerPost.use("/likes", routerLike);
routerPost.get("/getpost",auth, postController.getPostByUserId);

//ADD POST
routerPost.post("",auth, postController.newPost);

//UPDATE POST
routerPost.put("/:id",auth, postController.updatePost);

//DELETE POST
routerPost.delete("/:id",auth, postController.deleteAPost);

//GET POST
routerPost.get("/:id", postController.getPost);


export default routerPost;
