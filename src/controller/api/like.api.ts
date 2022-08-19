import{ Request, Response} from 'express';
import { User } from '../../model/user';
class likeController {
    like = async (req: Request, res: Response) => {
        try {
           
            // console.log(like);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new likeController;