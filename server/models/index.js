var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (res) {
      var getAllMessagesQuery = 'SELECT * FROM messages';
      db.query(getAllMessagesQuery, function(err, rows){
        if (err) {
          console.log("Error fetching all messages: ", err);
        } else {
          console.log("Here are all the messages: ", rows);
          res.send(rows);
        }
      });

    }, // a function which produces all the messages
    post: function (message) {

      // create message to be inserted
      var newMessage = {
        roomname: message.roomname,
        message: message.message,
      };
      
      // querry db for user id
      // var userID = '(SELECT id from users WHERE username = ?)';
      var userIDqueryString = 'SELECT id FROM users where username=\"' + message.username +'\"';
      db.query(userIDqueryString, function(err, rows){
        if (err) {
          console.log("Error fetching ID: ", err);
        } else {
          console.log("User ID for user ", message.username, " is: ", rows[0].id);
          newMessage.userId = rows[0].id;
        }
      });
      db.query('INSERT INTO messages SET ?', newMessage, function(error, rows){
        if (error) {
          console.log("error accessing db!!! Tryng to add a message.");
        } else {
          console.log("I posted a message!!!");
        } 
      });

      // INSERT INTO messages (text, roomname, user_id) VALUES (x, x, userID)
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

