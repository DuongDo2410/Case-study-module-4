// import likeController from '../controller/api/like.api';
import postController from '../controller/api/post.api';
const routerLike = require('express').Router();

//LIKE POST
routerLike.post('/:id',postController.likeAPost);

export default routerLike;