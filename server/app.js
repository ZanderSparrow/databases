var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

// Database
var mysql = require('mysql');

var app = express();
module.exports.app = app;

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
    return;
  }
  console.log('Connection established');
});

connection.end(function(err){
  console.log('end the connection');
});

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

