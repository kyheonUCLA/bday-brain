import { Request, Response } from 'express';

const userController = {
  create: (req: Request, res: Response): void => {
    const createData = {
      message: 'sucessfully creating user within database'
    }
    res.json(createData);
    console.log(req)
  },

  read: (req: Request, res: Response): void => {
    const readData = {
      message: 'sucessfully reading user data from database'
    }
    res.json(readData)
  },

  update: (req: Request, res: Response): void => {
    const updateData = {
      message: "sucessfully updated user data"
    }
    res.json(updateData)
  },

  delete: (req: Request, res: Response): void => {
    const deleteData = {
      message: "sucessfully deleted user data"
    }
    res.json(deleteData)
  }
};

export default userController;
