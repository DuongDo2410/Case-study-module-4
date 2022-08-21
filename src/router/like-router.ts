import { auth } from './../middleware/auth';
// import likeController from '../controller/api/like.api';
import likeController from '../controller/api/like.api';
const routerLike = require('express').Router();

//LIKE POST
routerLike.post('/totalLike',auth,likeController.like);

export default routerLike;