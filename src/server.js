// import dependencies
import dotenv from 'dotenv';
import express from 'express';

// import configs
import dbConfig from './config/db';
import expressConfig from './config/express';

// import our routes
import index from './routes';
import books from './routes/books';

// initialize DotEnv as early as possible
dotenv.config();

const app = express();

// configure our app
dbConfig();
expressConfig(app);

app.use('/', index);
app.use('/books', books);

export default app;
