import express from 'express';
import dotenv from 'dotenv';

import dbConfig from './config/db';
import expressConfig from './config/express';

const app = express();
dotenv.config();

dbConfig();
expressConfig(app);

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello there!');
});

app.post('/', (req, res) => {
  const message = `Hello ${req.body.to}`;
  res.status(200).json({
    status: 'ok',
    message,
  });
});

export default app;
