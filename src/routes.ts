import { Router } from 'express';
import TaskController from './controllers/TaskController';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/users',UserController.list); 
routes.post('/user', UserController.create);
routes.get('/insert_user', UserController.new);
routes.get('/tasks_by_user/:id', UserController.tasks_by_user);

routes.get('/tasks', TaskController.list);
routes.get('/task/:id', TaskController.listByUser);
routes.post('/task', TaskController.create);
routes.get('/insert_task', TaskController.new);

routes.get('/', UserController.index);

export default routes;