// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("just showing  forever restart demo\n");
});

// listen on localhost:8000
server.listen(6000);
console.log(" updating successfully://127.0.0.1:6000/");
