const http = require('http');
const fs = require('fs');

// const options = {
//   key: fs.readFileSync('../key.pem'),
//   cert: fs.readFileSync('../cert.pem')
// };

http.createServer( function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(6000);
console.log('connected with port 6000')

