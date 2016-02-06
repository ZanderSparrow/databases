var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      var body = '';
      req.on('data', function(data){
        body += data;
      });
      req.on('end', function(){
        console.log("I finished getting data!!! ", body);
        var msg = JSON.stringify(body);
      });
      res.send();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var body = '';
      console.log(req.body);
      models.users.post(req.body);
      res.send();
    }
  }
};

