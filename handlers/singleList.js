var ToDoList = require("../models/list");

module.exports = function(req, reply) {
  var list = new ToDoList({
    id: 2
  });
  list.load(function() {
    var data = list.toJSON();
    console.log(data);

    reply.view("index", {
      reminders: list.toJSON()
    });
  });
};
