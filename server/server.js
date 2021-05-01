import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
import colors from 'colors';
import { apiRouter } from './api';

// enable environment variables to be used in development mode
// allow values to be passed from .env file
// any variable that starts will process.env will be accessing .env
dotenv.config();

// create server
const app = express();

// middleware
app.use(logger('dev'));
app.enable('trust proxy');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', apiRouter);

// find base directory the program is being ran in
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/dist')));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'index.html')));

// port will change in production mode
const port = process.env.PORT || 3001;

// start server
app.listen(port, () => {
  console.log(`${process.env.APP_NAME} listening on port ${port}!`.blue.bold);
});
