  var ToDoList = require("../models/ListCollection");

  module.exports = function(req, reply) {
    var list = new ToDoList();
    list.load(function() {
      var data = list.toJSON();
      console.log(data);

      reply.view("form", {
        reminder: data
      });
    });
  };
