import { Request, Response } from 'express';
import Comment from '../../model/comment';
class commentController {
    addComment = async (req: Request, res:Response)=>{
       try {
        let newComment = req.body;
        newComment= await Comment.create(newComment);
        res.status(200).send('successfully added!');
       } catch (error) {
        res.status(500).json(error);
       }
    }
}

export default new commentController;