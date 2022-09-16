import { Router } from "express";
import { auth } from "./../middleware/auth";
import commentController from "../controller/api/comment.api";
export const routerCommnet = Router();

//  ADD COMMENT
routerCommnet.post("", commentController.addComment);
routerCommnet.get("/:id", commentController.getComment);

//UPDATE COMMENT
routerCommnet.put("/:id", commentController.updateComment);

//DELETE COMMENT
routerCommnet.delete("/:id", commentController.deleteComment);

export default routerCommnet;
