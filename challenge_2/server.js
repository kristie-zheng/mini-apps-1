//set up express
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var requestHandler = require('./client/app.js');
var app = express();

var saved = [];

//serve the static HTML file
app.use(express.static('client'));
app.use(express.static('node_modules'));
// app.use(bodyParser.json());
//get request
// app.get('/', function(request, response) {
//   response.send('csv app');
// });



//start up the server
app.listen(3000, function() {
  console.log('app listening on port 3k');
});

//here is the route to handle a post request from AJAX
app.post('/', function(req, res) {
  // requestHandler.requestHandler();
  console.log(req.body)
  res.send(req.body);
});

//here is the route to handle a get request from AJAX
// app.get('/', function(req, res) {
//   res.send('you made a get req');
// });


exports.app = app;