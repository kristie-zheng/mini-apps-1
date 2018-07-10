//var $ = import('jquery');
// //set up express
// var express = require('express');
// var app = express();

// //serve the static HTML file
// app.use(express.static('client'));

// //get request
// app.get('/', function(request, response) {
//   response.send('csv app');
// });


// //post request

//start up the server
// app.listen(3000, function() {
//   console.log('app listening on port 3k');
// });

var dataJSON;

var submitHandler = function() {
  var dataToSubmit= $('dataSubmission').val();
  var dataJSON = JSON.stringify(dataToSubmit); //this is what will be sent with the post request
  //POST request that submits stringified data to server 
  $.ajax('/', {
    method: 'POST',
    contentType: 'application/JSON',
    data: dataJSON,
    //dataType: //what you expect to receive back
    success: function(data) {
      console.log('this data was posted', data);
    },
    error: function(error) {
      console.log('failed to post', error);
    }
  });
};


// //get request that receives the JSON from server to be converted into CSV
$.ajax('/', {
  method: 'GET',
  contentType: 'application/JSON',
  data: dataJSON,
  //dataType: //what you expect to receive back
  success: function(data) {
    console.log(JSON.parse(data));
  },
  error: function(error) {
    console.log('failed to get', error);
  }
});

console.log($(document.body));
