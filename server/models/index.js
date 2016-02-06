var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message) {
      // querry db for user id
      // var userID = '(SELECT id from users WHERE username = ?)';
      // INSERT INTO messages (text, roomname, user_id) VALUES (x, x, userID)
      var newMessage = {
        roomname: message.roomname,
        message: message.message,
        user_id: 1
      };
      
      db.query('INSERT INTO messages SET ?', newMessage, function(error, rows){
        if (error) {
          console.log("error accessing db!!! Tryng to add a message.");
        } else {
          console.log("I posted a message!!!");
        } 
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user) {  
      db.query('INSERT IGNORE INTO users SET ?', user, function(err, result){
        if (err) { 
          console.log("error", err); 
        } else {
          console.log("success!!!!");
        }
      });
    }
  }
};

