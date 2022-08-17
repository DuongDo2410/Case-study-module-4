import { Router } from 'express';
import postController from 'src/controller/api/post.api';
const router = require('express').Router();

router.post('/newsPost',postController.post);