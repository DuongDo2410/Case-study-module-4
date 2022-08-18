import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import { User } from "../../model/user";
import { SECRET_KEY } from "../../middleware/auth";

class AuthController {
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = req.body;
      user.password = await bcrypt.hash(user.password, 10);
      user = await User.create(user);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let loginForm = req.body;

      let user = await User.findOne({
        username: loginForm.username,
      });

      if (!user) {
        res.status(401).json({
          message: "username is not existed",
        });
      } else {
        let pass: any = user.password;
        let comparePassword = await bcrypt.compare(loginForm.password, pass);
        if (!comparePassword) {
          res.status(401).json({
            message: "password is wrong",
          });
        } else {
          let payload = {
            id: user._id,
            username: user.username,
            name: user.name,
            avatar: user.avatar,
          };
          let token = jwt.sign(payload, SECRET_KEY, {
            expiresIn: 36000,
          });
          res.status(200).json({
            token: token,
          });
        }
      }
    } catch (err) {
      next(err);
    }
  };
}

export default new AuthController();
