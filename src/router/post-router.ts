import postController from '../controller/api/post.api';
import routerCommnet from './comment-router';
const routerPost = require('express').Router();



//ADD POST
routerPost.post('',postController.newPost);

//UPDATE POST
routerPost.put('/:id',postController.updatePost);


//DELETE POST
routerPost.delete('/:id',postController.deleteAPost);

//GET POST
routerPost.get('/:id',postController.getPost);

export default routerPost;