import express from 'express'
import authController from '../controllers/auth.controller'

const authRouter = express.Router();

authRouter.get('/', authController.getAuthData);
//authRouter.post('/', testController.createExample);

export default authRouter;
