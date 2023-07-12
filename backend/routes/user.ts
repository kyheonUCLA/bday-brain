import express from 'express';
import userController from "../controllers/user.controller"

const userRouter = express.Router();

userRouter.post('/', userController.create)
userRouter.get('/', userController.read)
userRouter.put('/', userController.update)
userRouter.delete('/', userController.delete)

export default userRouter;