var dgram = require('dgram'),
	server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
	console.log('> ' + msg + 'Отправитель: ' + rinfo.address + ':' + rinfo.port + '\n');
});

server.bind(3000, 'localhost');