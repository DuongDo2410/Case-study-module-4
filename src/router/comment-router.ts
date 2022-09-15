import commentController from "../controller/api/comment.api";
const routerCommnet = require('express').Router();

//  ADD COMMENT
routerCommnet.post('',commentController.addComment );
routerCommnet.get('/:id',commentController.getComment );

//UPDATE COMMENT
routerCommnet.put('/:id',commentController.updateComment );

//DELETE COMMENT
routerCommnet.delete('/:id',commentController.deleteComment );

export default routerCommnet