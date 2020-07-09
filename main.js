// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Now showing demo\n");
});

// listen on localhost:8000
server.listen(7000);
console.log(" updating successfully://127.0.0.1:7000/");
