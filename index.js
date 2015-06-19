  //index.js
  var hapi = require("hapi");
  var server = new hapi.Server();
  server.connection({ port: 8000 });
  

  //view config
  server.views({
    //path: "templates",
    engines: {
      html: require("handlebars")
    },
    path: "./views",
    layoutPath: "./views",
    layout: "default",
    isCached: false
  });

  var ListCollection = require("./models/list");

  var sql = require("./database");
  sql.init(function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("database ready");
    var list = new ListCollection({
      task: "Start server"
    });
    //console.log(list.toJSON());
    list.create(function(err){
      if(err) {
        console.error(err);
      }
    });

    server.start();
  });

  var routes = require("./routes");
  server.route(routes);
