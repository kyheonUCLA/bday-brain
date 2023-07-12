import express from 'express'
import friendController from "../controllers/friend.controller"

const friendRouter = express.Router()

friendRouter.post('/', friendController.create)

export default friendRouter
