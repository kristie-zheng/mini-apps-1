//set up express
var express = require('express');
var app = express();

//serve the static HTML file
app.use(express.static('client'));

//get request
app.get('/', function(request, response) {
  response.send('csv app');
});


//post request

//start up the server
app.listen(3000, function() {
  console.log('app listening on port 3k');
});