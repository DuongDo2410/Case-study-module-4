import { Router } from 'express';
import postController from '../controller/api/post.api';
import routerCommnet from './comment-router';
const routerPost = require('express').Router();

//COMMENT ROUTER
routerPost.use('/comments',routerCommnet)

//ADD POST
routerPost.post('',postController.newPost);

//UPDATE POST
routerPost.put('/:id',postController.updatePost);

//GET A POST
routerPost.get('/:id',postController.getAPost);

//DELETE POST
routerPost.delete('/:id',postController.deleteAPost);



export default routerPost;