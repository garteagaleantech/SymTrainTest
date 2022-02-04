import express from 'express';
import cors from 'cors';
import router from './components/router';
import { errorResponseMiddleware } from './middlewares';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);

app.use(errorResponseMiddleware);

export default app;
