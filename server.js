var express = require('express');
var app = express();
// module for correct cancatenating paths
var path = require('path');

var url = "mongodb://xander_daine:1234@ds157833.mlab.com:57833/short_microservice";

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  // route to serve up the homepage (index.html)
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/api/shorten', function(req, res) {
  // route to create and return a shortened URL given a long URL
});

app.get('/:encoded_id', function(req, res) {
  // route to redirect the visitor to their original URL given the short URL
});

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});