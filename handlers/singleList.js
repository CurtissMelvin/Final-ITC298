var ListCollection = require("../models/ListCollection");

module.exports = function(req, reply) {
  var list = new ListCollection();
  list.load(function() {
    var data = list.toJSON();
    console.log(data);

    reply.view("index", {
      reminders: list.toJSON()
    });
  });
};
