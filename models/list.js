    //list.js

    var Backbone = require("backbone");
    var sql = require("../database");


    var ListCollection = Backbone.Model.extend({
      defaults: {
        id:"",
        description: "",
        date: "",
        status: ""
      },

      create: function(callback) {
          callback = callback || function() {};
          //get its own database
          var data = this.toJSON();
          console.log("CREATE", data);
          //run an INSERT on the database
          var q = "INSERT INTO lists (description, date, status) VALUES ($description, $date, $status);";
          //pass in its database
          sql.connection.run(q, {
            $description: data.description,
            $date: data.date,
            $status: data.status,
          }, function(err) {
            if (err) {
              return callback(err);
            }
            callback();
          });
    },
    load: function(callback) {
        var self = this;
        var q = "SELECT * FROM lists WHERE rowid = $id;";
        //get a single  result
        sql.connection.get(q, {
          $id: this.get("id")
        }, function(err, results){
          self.set(results);
          callback();
        });
    },

    loadall: function(callback) {
      var self = this;
      var q = "SELECT *  FROM lists";
      sql.connection.all(q, function(err, results) {
        self.set(results);
        callback();
      })
    }

});

module.exports = ListCollection;
