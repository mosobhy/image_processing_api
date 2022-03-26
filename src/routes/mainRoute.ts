import express, { Response, Request } from 'express';
import resize from './api/resize';

const routes = express.Router();

routes.use('/image', resize);

export default routes;
