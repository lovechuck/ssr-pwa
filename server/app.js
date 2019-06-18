var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');
var helmet = require('helmet')
var favicon = require('serve-favicon');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(helmet())
app.use(compression())
app.use(favicon(path.join(__dirname, 'wwwroot', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'wwwroot')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;