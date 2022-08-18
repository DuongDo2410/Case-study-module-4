import commentController from "../controller/api/comment.api";
const routerCommnet = require('express').Router();

//  ADD COMMENT
routerCommnet.post('/:id',commentController.addComment );

export default routerCommnet