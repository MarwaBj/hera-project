const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const helpers = require('./lib');

const app = express();

const controllers = require('./controllers/mainController');
const { Error500Server } = require('./controllers/errorController');


app.use(bodyParser.json());
app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.ico')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('.hbs', exphbs({
  helpers,
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.use(controllers);
app.use(Error500Server);

module.exports = app;
