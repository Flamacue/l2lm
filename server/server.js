var express  = require('express');
var app      = express();    // create our app w/ express
var morgan = require('morgan');  // log requests to the console

app.use(morgan('dev')); //log every request to the console

app.listen(8080);
console.log("App listening on port 8080");
