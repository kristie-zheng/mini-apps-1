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
app.listen(3000, function() {
  console.log('app listening on port 3k');
});

//here is the route to handle a post request from AJAX
app.post('/', function(req, res) {
  // console.log('here is the req body', Object.keys(req.body)[0]); //able to receive the string of the request body
  // console.log('here is the parsed req body', JSON.parse(Object.keys(req.body)[0]));
  var CSVString = convertJSONToCSV(JSON.parse(Object.keys(req.body)[0])['data']);
  res.send(CSVString);
  res.end();
});

//here is the route to handle a get request from AJAX
// app.get('/', function(req, res) {
//   res.send('you made a get req');
// });

//need a function on the server side to convert the received JSON data and turn into CSV
var convertJSONToCSV = function(data) {
  var csvString = '';
  var headings = Object.keys(data).join(',');
  // console.log(headings);
  for (var key in data) {
    if (typeof data[key] !== 'object') {
      csvString+=data[key] + ',';
    } else {
      csvString += '\n' + convertJSONToCSV(data[key]);
    }
  }
  if(csvString[csvString.length - 1] === ',') {
    csvString = csvString(0, csvString.length);
  }
  console.log(headings + '\n' + csvString);
  return csvString;
}


exports.app = app;