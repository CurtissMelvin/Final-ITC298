    //routes.js

    module.exports =
  [
      {
        method: "GET",
        path: "/",
        handler: require("./handlers/home")
      },

      {
        method: "GET",
        path: "/list",
        handler: require("./handlers/singleList")
      },

      {
        method: "POST",
        path: "/list",
        handler: require("./handlers/listCreated")

      },

      {
        method: "GET",
        path: "/list/{id}",
        handler: require("./handlers/singleList")
      },

      {
        method: "GET",
        path: "/assets/{param*}",
        handler: {
          directory: {
            path: "./src"
          }
        }
      },

      {
      path: "/login",
      method: "GET",
      handler: require("./handlers/getLogin")
      },

      {
        path: "/login",
        method: "POST",
        handler: require("./handlers/postLogin")
      },
  ];
