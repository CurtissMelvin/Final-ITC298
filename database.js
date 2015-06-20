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

      database.connection = db;

      async.series([
        function(next) {
          db.run("CREATE TABLE IF NOT EXISTS lists ('Description', 'Date', 'Status');", next);
        },
        function(next) {
          db.run("CREATE TABLE IF NOT EXISTS users ('username', 'session', 'password');", next);
        },
        function(next) {
          db.run("INSERT INTO users ('username', 'password') VALUES ($username, $password);", {
            $username: "curtiss",
            $password: "12345"
          }, next)
        },
        function(next) {
          db.run("INSERT INTO users ('username', 'password') VALUES ($username, $password);", {
            $username: "vistor",
            $password: "welcome"
          }, next);
        }
        ], function(err) {
            db.all("SELECT * FROM users", console.log.bind(console));
            console.log(err);
            if (callback) callback(err);
        });
    });
  },
}

    module.exports = database;
