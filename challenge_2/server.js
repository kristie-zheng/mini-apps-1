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
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//get request
// app.get('/', function(request, response) {
//   response.send('csv app');
// });



//start up the server
app.listen(3000, function() {``
  console.log('app listening on port 3k');
});

//here is the route to handle a post request from AJAX
app.post('/', function(req, res) {
  console.log('here is the req body', Object.keys(req.body)[0]); //able to receive the string of the request body
  // console.log('here is the parsed req body', JSON.parse(req.body))
  res.send(req.body);
  res.end();
});

//here is the route to handle a get request from AJAX
app.get('/', function(req, res) {
  res.send('you made a get req');
});

//need a function on the server side to convert the received JSON data and turn into CSV
var convertJSONToCSV = function() {
  return req.body.map(function(element) {
    return JSON.stringify(element);
  });
}


exports.app = app;