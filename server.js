//setup
var seatGeekBaseUrl = "api.seatgeek.com";
var spotifyBaseUrl = "api.spotify.com";
var secrets = require('./secrets'); //hiding secrets in separate file
var https = require('https');
var express  = require('express');
var favicon = require('serve-favicon');
var app  = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//configuration
app.use(express.static(__dirname + '/client/'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use(favicon(__dirname+'/client'+'/assets'+'/img'+'/favicon.ico'));

//routes
app.get('/api/hello/:name', function(req, res){
  res.json({"hello": req.params.name})
});
app.get('/api/:artist/top-tracks', function(req, res){
  var options = {
    host: spotifyBaseUrl,
    path: "/v1/search?q="+req.params.artist+"&type=artist&limit=1"
    //only returns first match, make this more robust later
  }
  //TODO fix the nested nature of this function, use a Future?
  var callback = function(response){
    var search = "";
    response.on('data', function (chunk) {
      search += chunk;
    });
    response.on('end', function () {
      if (JSON.parse(search).artists.items.length == 0){
        res.json({"results": {"tracks": [] }});
        return;
      }
      var id = JSON.parse(search).artists.items[0].id
      var tracks = "";
      options.path = "/v1/artists/"+id+"/top-tracks?country=US"
      var trackCallback = function(trackResponse){
        trackResponse.on('data', function (trackChunk) {
          tracks += trackChunk;
        });
        trackResponse.on('end', function(){
          res.json({
            "results": JSON.parse(tracks)
          });
        });
      };
      https.request(options, trackCallback).end();
    });
  };
  https.request(options, callback).end();
});
app.get('/api/:artist/events', function(req, res){
  //artist passed in the url is the slug name
  var options = {
    host: seatGeekBaseUrl,
    path: "/2/events?performers.slug=" + req.params.artist,
    auth: secrets.seatGeekApiKey
  };
  var callback = function(response){
    var str = "";
    response.on('data', function (chunk) {
      str += chunk;
    });
    response.on('end', function () {
      res.json({
        "results": JSON.parse(str)
      })
    });
  };
  https.request(options, callback).end()
});
app.get('/', function(req, res){
  res.sendFile(__dirname+'/client/index.html');
});
app.get('/*', function(req, res){
  /*
   * anything that doesn't exist gets redirected to the endpoint that loads the
   * mainview
   */
  res.redirect('/');
});
//listen
var port = 8080
app.listen(port);
console.log("Listening on port " + port);
