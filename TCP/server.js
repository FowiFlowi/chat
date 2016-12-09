var net = require('net');

var server = net.createServer((conn) => {
	console.log('connected');
	
	process.stdin.resume();

	process.stdin.on('data', (data) => {
		conn.write(data);
	})

	conn.on('data', (data) => {
		console.log(data + ' sent from: |' + conn.remoteAddress + ':' + conn.remotePort + ' |\n');
	});

	conn.on('close', () => {
		console.log('client closed connection');
	});
}).listen(3000);

console.log('TCP server is running on port 3000');