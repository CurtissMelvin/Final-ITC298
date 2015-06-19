    //database.js
    var async = require("async");
    var sqlite = require("sqlite3");

    var db;
  var users = {
    curtiss: {
      id: "curtiss",
      password: "12345"
    },
    visitor: {
      id: "visitor",
      password: "welcome"
    }
  };

    var database = {
      connection: null,
      init: function(callback) {
          var db = database.connection = new sqlite.Database("ToDoList.db", function(err) {
            if (err) {
              return callback(err);
            }
            callback(null);

            database.connection = db;

            async.series([

              db.run("CREATE TABLE IF NOT EXISTS lists ('Description', 'Date', 'Status');", function(err){
              if (err) {
                return callback(err);
              }
              callback(null);
              },

              db.run("CREATE TABLE IF NOT EXISTS users ('username', 'session', 'password');", function(err){
              if (err) {
                return callback(err);
              }
              callback(null);
              },

              db.run("INSERT INTO users ('username', 'password') VALUES ($username, $password);", function(err){

                $username: "curtiss",
                $password: "12345"
              },

              db.run("INSERT INTO users ('username', 'password') VALUES ($username, $password);", function(err){
                $username: "vistor",
                $password: "welcome"
              },

              ], function(err) {
                  db.all("SELECT * FROM users", console.log.bind(console));
                  console.log(err);
                  if (ready) ready(err);
              },
            });
          });
        });
      });
    });

    module.exports = database;
