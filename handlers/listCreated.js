//listCreated.js

var List = require("../models/list");

module.exports = function(req, reply) {
  if (!req.state.session) {
    return reply.redirect("/login");
  }
  var list = new List(req.payload);
  list.create(function(err){
    if (err) {
      console.log(err);
    }
    reply.redirect("/list");
  });
};
