import { Router } from 'express';
import taskControllers from '../controller/task.controllers';

// validation middlewares
import validationCreateTask from '../middlewares/validationCreateTask';

const routes = Router();

routes.post('/create/:userId', validationCreateTask,taskControllers.create);

export default routes;