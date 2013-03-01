var net = require('net');
var socket = net.Socket({});
socket.setEncoding('utf8');
socket.connect(9999, function () {
  socket.write('啊啊');
}).on('data', function (buffer) {
  console.log(buffer);
});