import express from 'express';
import testController from '../controllers/testController';

const testRouter = express.Router();

testRouter.get('/', testController.getTestData);

export default testRouter;
