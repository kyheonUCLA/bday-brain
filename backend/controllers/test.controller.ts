import { Request, Response } from 'express';

const testController = {
  getTestData: (req: Request, res: Response): void => {
    const testData = {
      id: 1,
      body: "this is the body",
      message: 'This is a test message from the backend!',
    };
    res.json(testData);
  },
};

export default testController;

