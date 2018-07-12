'use strict';

//setup express server

var express = require('express');
var app = express();

//set a port number
app.listen(3000, function () {
  console.log('app is running on 3k');
});

// app.get('/', function(req, res) {
//   res.send('placeholder text');
// })
//serve a static file 
app.use(express.static('public'));
app.use(express.static('client'));
app.use(express.static('node_modules'));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsSUFBSUEsVUFBVUMsUUFBZCxTQUFjQSxDQUFkO0FBQ0EsSUFBSUMsTUFBSixTQUFBOztBQUVBO0FBQ0FBLElBQUFBLE1BQUFBLENBQUFBLElBQUFBLEVBQWlCLFlBQVc7QUFDMUJDLFVBQUFBLEdBQUFBLENBQUFBLHNCQUFBQTtBQURGRCxDQUFBQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxJQUFBQSxHQUFBQSxDQUFRRixRQUFBQSxNQUFBQSxDQUFSRSxRQUFRRixDQUFSRSIsInNvdXJjZXNDb250ZW50IjpbIi8vc2V0dXAgZXhwcmVzcyBzZXJ2ZXJcbnZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIGFwcCA9IGV4cHJlc3MoKTtcblxuLy9zZXQgYSBwb3J0IG51bWJlclxuYXBwLmxpc3RlbigzMDAwLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2FwcCBpcyBydW5uaW5nIG9uIDNrJyk7XG59KTtcblxuLy8gYXBwLmdldCgnLycsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4vLyAgIHJlcy5zZW5kKCdwbGFjZWhvbGRlciB0ZXh0Jyk7XG4vLyB9KVxuLy9zZXJ2ZSBhIHN0YXRpYyBmaWxlIFxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpIl19