import express from 'express';
import routes from '../routes';
import { join, login, logout } from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send('Home'));
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, (req, res) => res.send('Search'));

export default globalRouter;