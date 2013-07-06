var express = require('express');

var hello = new Buffer();

var hello = fs.readFileSync ('index.html');

var hello_str = hello.toString("utf-8");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(hello_str.slice(0,-1));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
