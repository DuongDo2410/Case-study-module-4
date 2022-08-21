import{ Response} from 'express';
import { Like } from '../../model/like';
class likeController {
    like = async (req: any, res: Response) => {
        try {
            let userId = req.decoded.id ;
            console.log(userId);
            let like = await Like.findOne(userId);
            console.log(like);
            await like?.updateOne({$set:userId})
            res.status(200).json(like);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new likeController;