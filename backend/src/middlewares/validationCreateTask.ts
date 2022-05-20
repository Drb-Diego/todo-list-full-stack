import { NextFunction, Request, Response } from 'express';
import { IRequestTask } from '../types';
import httpStatusCodes from 'http-status-codes';
import Joi from 'joi';

export default (request: Request, response: Response, next: NextFunction) => {
  const { title, description, completed }: IRequestTask = request.body;
  const { userId } = request.params;

  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    completed: Joi.boolean().required(),
    userId: Joi.string(),
  });

  const { error } = schema.validate({ title, description, completed, userId });

  if (error?.message) {
    return response.status(httpStatusCodes.BAD_REQUEST).json({ message: error?.message})
  }

  next();
};
