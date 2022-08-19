import{Request, Response } from 'express';
import postController from '../controller/api/post.api';
// import routerCommnet from './comment-router';

import routerCommnet from './comment-router';
import routerLike from './like-router';
import verifyToken from '../services/verifyJWT';
const routerPost = require('express').Router();


//COMMENT ROUTER
// routerPost.use('/comments',routerCommnet)

//LIKE ROUTER
routerPost.use('/likes',routerLike);

//ADD POST
routerPost.post('',postController.newPost);

//UPDATE POST
routerPost.put('/:id',postController.updatePost);


//DELETE POST
routerPost.delete('/:id',postController.deleteAPost);

//GET POST
routerPost.get('/:id',postController.getPost);
// routerPost.get('/:id',(req: Request, res:Response , next: {})=>{
    // let userLogin = verifyToken(req,res);
    // console.log(userLogin);
// });

export default routerPost;
