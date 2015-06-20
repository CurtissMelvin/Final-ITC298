//getLogin.js
var db = require("../database");

module.exports = function(req, reply) {
    reply.view("login")
};
