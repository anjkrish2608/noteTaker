var path = require("path");

module.exports=function(app){// Basic route that sends the user first to the AJAX Page
  
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
      const name=path.join(__dirname, "/public/notes.html");
      console.log(name);
    });
  
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
      const name=path.join(__dirname, "/public/index.html");
      console.log(name);
    });}
