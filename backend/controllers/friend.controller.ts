import { Request, Response } from 'express';

const friendController = {
  create: (req: Request, res: Response): void => {
    const createData = {
      message: "created a new friend"
    }
    res.json(createData)
  }
}

export default friendController