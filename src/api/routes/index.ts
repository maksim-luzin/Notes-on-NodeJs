import { Express } from 'express';
import { notes } from './notes';
import { Routes } from '../../common/enums';

const routes = (app: Express) => {
  app.use(Routes.Notes, notes);
};

export {routes};
