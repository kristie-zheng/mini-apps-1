var dataJSON;

//this function grabs the user's input and converts it into JSON
//makes an ajax post request where the user's input is sent as 'data' JSON
var submitHandler = function() {
  var dataToSubmit= $('.dataSubmission').val();
  console.log(dataToSubmit)
var obj =
    {data:{
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
    "role": "Broker",
    "sales": 1000000,
    "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
}}; //this is what will be sent with the post request
 // var dataJSON = JSON.parse('{1: "lit"}');
  // console.log(dataJSON)
  // console.log(dataJSON);
  var mydata = JSON.stringify({1: "lit"});
  //POST request that submits stringified data to server 
  $.ajax('/', {
    method: 'POST',
    //contentType: 'application/JSON',
    data: JSON.stringify(obj),
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
    //dataType: 'application/JSON',
    success: function(data) {
      console.log('here is the data', data);
      $(".textAreaContainer").append(`<div> ${data} HEY</div>`);
      $('button').css('color', 'blue');
    },
    error: function(error) {
      console.log('failed to get', error);
    }
  });
};


// //get request that receives the JSON from server to be converted into CSV

//module.exports.requestHandler = requestHandler;