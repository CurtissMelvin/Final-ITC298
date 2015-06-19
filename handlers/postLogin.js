//postLogin.js
var db = require("../db");
var encrypt = require("encrypt");

module.exports = function (req, reply) {
  var hash = encrypt.createHash("sha1");


  db.connection.get("SELECT * FROM users WHERE username = $username", {
    $username: req.payload.name
  }, function(err, expected) {

      console.log(req.payload, expected, err);


        if (expected && req.payload.password == expected.password) {
          //set cookies
          var response = reply.redirect("/");
          var id = req.payload.name + Date.now();
          hash.update(id);
          id = hash.digest("hex");
          response.state("user", req.payload.name);
          response.state("session", id);
          console.log(req.payload.name, id);


          db.connection.run("UPDATE users SET session = $session WHERE username = $user", {
            $user: req.payload.name,
            $session: id
          });
        } else {
    //redirect if not
            reply.redirect("/login");
        }
    });
};
