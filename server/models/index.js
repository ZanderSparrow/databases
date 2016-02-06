var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message) {
      console.log("incoming message: ", message);
      var msg = JSON.parse(message);

      // querry db for user id
      // db.connection.query('SELECT * from MESSAGES', function(error, rows){
      //   if (error) {
      //     console.log("error accessing db!!!");
      //   } else {
      //     console.log(rows);
      //   } 

      // });
        // if user exists
          // addUser: update message object
                // send message to db       
        // if user does not exist
          // send post request to users
          // addUser  ...

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user) {  
      // var parsed = JSON.parse(user);
      // console.log("User looks like this: ", user, typeof user);
      db.query('INSERT INTO users SET ?', user, function(err, result){
        if (err) { 
          console.log("error", err); 
        } else {
          console.log("success!!!!");
        }
      });
    }
  }
};

