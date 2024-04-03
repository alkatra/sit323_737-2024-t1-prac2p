// Initialize express and define a port
var express = require("express");
var app = express();
var path = require("path");
var port = 3000;

// GET endpoint that returns welcome.html within public subdirectory
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/welcome.html"));
});

// Run server on defined port
app.listen(port, function () {
  console.log("Server listening on port 3000");
});
