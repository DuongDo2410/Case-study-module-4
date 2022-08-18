import commentController from "../controller/api/comment.api";
const routerCommnet = require('express').Router();

//  ADD COMMENT
routerCommnet.post('/:id',commentController.addComment );

//UPDATE COMMENT
routerCommnet.put('/:id',commentController.updateComment );

//DELETE COMMENT
routerCommnet.delete('/:id',commentController.deleteComment );

export default routerCommnet