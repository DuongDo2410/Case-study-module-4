import { Router } from "express";
import UserController from "../controller/api/user.api";
import { auth } from "../middleware/auth";
export const userProfileRouter = Router();
userProfileRouter.use(auth);
userProfileRouter.get("", UserController.getAllUsers);
userProfileRouter.get("/detail/:id", UserController.getSingleUser);
userProfileRouter.post("", UserController.createUser);
userProfileRouter.put("/:id", UserController.updateUser);
userProfileRouter.get("/search", UserController.getSingleUserByName);
userProfileRouter.get(
  "/getUserToLocalstorage",
  UserController.getUserToLocalStorage
);
//update
