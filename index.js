// const http = require("http");
const port = process.env.PORT || 3000;
var db = require("./db.config");
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello World</h1>");
// });

// server.listen(port, () => {
//   console.log(`Server running at port ` + port);
// });

var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Main Page</h1>");
});

app.get("/employee", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Employee Page</h1>");
});

app.listen(port, function () {
  console.log("Listening at " + port);
});
