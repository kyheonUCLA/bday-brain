import express from 'express'

// Workflow is to import all routes into main and 
// add paths to router object. Then main (containing all routes)
// will be imported in app.ts
import testRouter from './test'
import authRouter from './auth'
import userRouter from './user'
import friendRouter from './friend'

const mainRouter = express.Router()

mainRouter.use('/api/test', testRouter)
mainRouter.use('/api/auth', authRouter)
mainRouter.use('/api/user', userRouter)
mainRouter.use('/api/friend', friendRouter)

export default mainRouter;
