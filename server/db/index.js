var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// Connect to database
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cats',
  database: 'chat'
});

connection.connect(function(err) {
  if(err){
    console.log('Error connecting to Db');
  }
  console.log('Connection established');
});

module.exports = connection;
