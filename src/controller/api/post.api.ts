import Post from '../../model/post';
import { Request, Response } from 'express';
const validator = require('validator');
class postController {
    newPost = async (req: Request, res: Response) => {
        try {
            let newPost = req.body;
            if (!validator.isEmpty(newPost.text)) {
                let newsPost = await Post.create(newPost);
                res.status(200).json(newsPost);
            } else {
                res.status(500).json('Please enter something...!')
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }

    //GET A POST
    getAPost = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            const post = await Post.findById(id);
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json(error);

        }
    }
    updatePost = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let post = await Post.findById(id);
            await post?.updateOne({ $set: req.body })
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error);
        }
    };
    deleteAPost = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            await Post.findByIdAndDelete(id);
            res.status(200).json(" Delete successfully!");
        } catch (error) {
            res.status(500).json(error);

        }
    };
}

export default new postController;