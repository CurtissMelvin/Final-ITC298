    //Lists.js

    var Backbone = require("backbone");
    var sql = require("../database");
    var list = require("./list");

    var ListCollection = Backbone.Collection.extend({
      model: list,
      load: function(callback){
        var self = this;
        var q = "SELECT rowid AS id, description, date, status FROM lists;"
        sql.connection.all(q, function(err, results) {
          console.log(results);
          self.add(results);
          callback();
        });
      }
    });

    module.exports = ListCollection;
