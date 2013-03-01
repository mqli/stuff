var net = require('net');
var server = net.Server({});
server.listen(9999,  function () {
  console.log(9999);
}).on('connection', function (socket) {
  socket.setEncoding('utf8');
  socket.write('hello');
  socket.on('data', function (buffer) {
    console.log(buffer);
  });
});