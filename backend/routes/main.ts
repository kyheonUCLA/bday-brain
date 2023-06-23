import express from 'express';

// Workflow is to import all routes into main and 
// add paths to router object. Then main (containing all routes)
// will be imported in app.ts
import testRouter from './test';

const mainRouter = express.Router();

mainRouter.use('/api/test', testRouter);

export default mainRouter;
