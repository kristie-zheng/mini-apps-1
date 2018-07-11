//setup express server
var express = require('express');
var app = express();

//set a port number
app.listen(3000, function() {
  console.log('app is running on 3k');
});

// app.get('/', function(req, res) {
//   res.send('placeholder text');
// })
//serve a static file 
app.use(express.static('public'))