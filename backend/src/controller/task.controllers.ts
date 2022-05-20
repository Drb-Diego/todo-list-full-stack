import { Request, Response } from 'express';
import { IRequestTask } from '../types';
import httpStatusCodes from 'http-status-codes';
import createTask from '../service/createTask';

export default {
  async create (request: Request, response: Response) {
    const { title, description, completed }: IRequestTask = request.body;
    const { userId } = request.params;

    const taskCreated = await createTask({ title, description, completed, userId })

    return response
      .status(httpStatusCodes.OK)
      .json(taskCreated);
  },
};
