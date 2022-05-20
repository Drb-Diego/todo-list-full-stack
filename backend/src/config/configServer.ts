import express from 'express';
import 'dotenv/config';
import task from  '../routes/tasks.routes';

export default () => {
  const app = express();

  app.use(express.json());
  app.use('/task', task);

  return app;
}