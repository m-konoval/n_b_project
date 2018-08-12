var httpError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

let connectUrl = 'mongodb://127.0.0.1:27017/nbApp';
let connectOptions = {
    useNewUrlParser: true
}

mongoose.Promise = global.Promise;
mongoose.connect(connectUrl, connectOptions)
    .then((response) => {
        console.log('hello');
    })
    .catch((err) => {
        console.l1og(err);
    });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



var port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);

server.listen(port);


module.exports = app;
