var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3000,
  user: 'root',
  password: ''
});

connection.connect(function(error) {
  if (error) {
    console.log('error connecting', error);
  } else {
    console.log('connected to mysql');
  }
});
module.exports = connection;

