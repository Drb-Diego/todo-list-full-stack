import { PrismaClient } from '@prisma/client';
import { ICreateTask } from '../types';

export default async (connetion: PrismaClient, { userId, title, description }: ICreateTask) => {
  const taskCreated = await connetion.tasks.create({ 
    data: {
      userId,
      title,
      description,
    }
  });

  return taskCreated;
};
