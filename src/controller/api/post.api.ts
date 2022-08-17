import {Request, Response} from 'express';
import { Post } from 'src/model/post';
class postController {
    post = async( req: Request, res: Response)=>{
        try {
            const newsPost = await new Post ({
                text:req.body.text,
                image:req.body.image,
                video:req.body.video,
            });
            const post = await newsPost.save();
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json(error);
            
        }
    }
}

export default new postController;