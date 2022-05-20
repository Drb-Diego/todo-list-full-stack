import createTask from "../models/createTask";
import connection from "../database/connection";
import { ICreateTask } from "../types";

export default async ({ userId, title, description }: ICreateTask) => {
  const taskCreated = await createTask(connection, { userId, title, description });

  return taskCreated;
}