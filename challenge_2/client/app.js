var dataJSON;

//this function grabs the user's input and converts it into JSON
//makes an ajax post request where the user's input is sent as 'data' JSON
var submitHandler = function() {
  var dataToSubmit= $('.dataSubmission').val();
  var dataJSON = JSON.stringify(dataToSubmit); //this is what will be sent with the post request
  console.log(dataJSON);
  //POST request that submits stringified data to server 
  $.ajax('/', {
    method: 'POST',
    //contentType: 'application/JSON',
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

var getHandler = function() {
  $.ajax('/', {
    method: 'GET',
    dataType: 'application/JSON',
    success: function(data) {
      console.log('here is the data', JSON.parse(data));
    },
    error: function(error) {
      console.log('failed to get', error);
    }
  });
};
// //get request that receives the JSON from server to be converted into CSV

//module.exports.requestHandler = requestHandler;