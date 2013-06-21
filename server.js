var http = require('http'),
    fs = require('fs');
http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync('blocks.html'));
}).listen(80);