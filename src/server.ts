import { createServer } from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from './api/routes';
import { errorHandlerMiddleware } from './api/middlewares/errorHandlerMiddleware';
import { getPort } from './helpers';

const app = express();
const server = createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.use(errorHandlerMiddleware);

server.listen(getPort(), () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at ${getPort()}.`);
});
