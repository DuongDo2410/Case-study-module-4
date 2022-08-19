import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../middleware/auth';

function verifyToken(req: any, res: any) {

    let authorization = req.headers.authorization;
    let accessToken = authorization.split(' ')[1];


    jwt.verify(accessToken,SECRET_KEY,(err:any,data:any)=>{
        if(err){
            res.status(401).json({
                error:err.message,
                message:'you are anonymous'
            })
        }else {
            return data;
        }
    })
}

export default verifyToken