  //database.js

  var sqlite = require("sqlite3");

  var facade = {
    connection: null,
    init: function(callback) {
        var db = new sqlite.Database("ToDoList.db", function(err) {
          if (err) {
            return callback(err);
          }
          facade.connection = db;
          db.run("CREATE TABLE IF NOT EXISTS lists ('Description', 'Date', 'Status');", function(err){
            if (err) {
              return callback(err);
            }
            callback(null);
        });
        });

    }
  };

  module.exports = facade;
