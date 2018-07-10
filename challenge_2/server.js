var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('csv app');
});

app.listen(3000, function() {
  console.log('app listening on port 3k');
})