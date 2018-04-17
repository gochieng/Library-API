import express from 'express';
import config from './src/config/express';

const app = express();

config(app);

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