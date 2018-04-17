import bodyParser from 'body-parser';
import morgan from 'morgan';

const config = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: 'true'}));
    app.use(morgan('dev'));
};

export default config;