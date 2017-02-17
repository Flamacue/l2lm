//setup
var express  = require('express');
var app  = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//configuration
app.use(express.static(__dirname + 'client/'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

//routes
app.get('/api/hello/:name', function(req, res){
  res.json({"hello": req.params.name})
});
app.get('/', function(req, res){
  res.sendfile('./client/index.html');
})
//listen
var port = 8080
app.listen(port);
console.log("Listening on port " + port);
