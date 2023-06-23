import express from 'express';
import testController from '../controllers/testController';

const usersRouter = express.Router();

usersRouter.get('/', testController.getTestData);

export default usersRouter;