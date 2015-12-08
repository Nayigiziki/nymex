//image server, serves static files
var express = require('express');
var app = express();
var morgan = require('morgan');
var parser = require('body-parser')
var cookieParser = require('cookie-parser');
var port = process.env.PORT || 8080;
app.use(morgan('tiny'));
app.use(express.static(__dirname + '/client/'));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.listen(port);
console.log('listening on port ', port);




