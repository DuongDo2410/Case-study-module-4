import { Response } from 'express';
// import Post from 'src/model/post';
import { Like } from '../../model/like';
class likeController {
    async like(req: any, res: Response) {
        try {
            const like = await Like.findOne({ postId: req.params.id }).populate('userId')

            if (like) {
                let listUserLike: any[] = like.userId;
                let idUserLike = req.decoded.id;
                let index = -1;
                try {
                    if (listUserLike) {
                        let statusUserLiked = false;
                        for (let i = 0; i < listUserLike.length; i++) {
                            if (listUserLike[i]._id == idUserLike) {
                                statusUserLiked = true;
                                index = i;
                                break;
                            }
                        }
                        try {
                            if (statusUserLiked) {
                                // DELETE
                                listUserLike.splice(index, 1);
                                res.status(200).json({ message: 'UnLike successfully', countLike: listUserLike.length });
                            } else {

                                like.userId.push(idUserLike);
                                res.status(200).json({ message: 'Like successfully', countLike: listUserLike.length });
                            }
                            await like.save()
                        } catch (error: any) {
                            res.status(500).json(error.message);
                        }
                    }
                } catch (error: any) {
                    res.status(404).json(error.message);
                }


            } else {
                let like = {
                    userId: req.decoded.id,
                    postId: req.params.id
                }
                await Like.create(like);
                res.status(200).json('Like successfully created');
            }

        } catch (error: any) {
            res.status(500).json(error.message);
        }
    }
}

export default new likeController;