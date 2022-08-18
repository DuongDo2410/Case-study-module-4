import Post from '../../model/post';
import { User } from '../../model/user';
import { Request, Response } from 'express';
class postController {
    newPost = async (req: Request, res: Response) => {
        try {
            let newPost = req.body;
            newPost = await new Post(newPost);
            let newsPost = await newPost.save();
            if (req.body.user) {
                const user = User.findById(req.body.user);
                console.log(user);

                await user.updateOne({ $push: { posts: newsPost._id } });
            }
            res.status(200).json(newsPost);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //GET A POST
    getAPost = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            const post = await Post.findById(id).populate("user");
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
            res.status(200).json("Successfully updated!")
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