//listCreated.js

var List = require("../models/list");

module.exports = function(req, reply) {
  var list = new List(req.payload);
  list.create(function(err){
    if (err) {
      console.log(err);
    }
    reply.redirect("/list");
  });
};
