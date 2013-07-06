var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var fs = require('fs'); 
  var hello = new Buffer(100);
  hello = fs.readFileSync('index.html');
  var hello_str = hello.toString('utf-8');

  response.send(hello_str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
