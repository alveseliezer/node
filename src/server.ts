import express from 'express';
import './database/connection';
import routes from './routes'
import path = require('path');

const app = express();

app.set('views', 'src/views'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

app.use(express.static(path.join(__dirname, 'public')));// to use css
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json());
app.use(routes);

app.listen(3333);