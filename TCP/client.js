var net = require('net');

var client = new net.Socket();
client.setEncoding('utf8');

client.connect('16203', 'tcp://0.tcp.ngrok.io', () => {
	console.log('connected to server');
	client.write('Hi guy!');
});

process.stdin.resume();

process.stdin.on('data', (data) => {
	client.write(data);
});

client.on('data', (data) => {
	console.log(data);
});

client.on('close', () => {
	console.log('connection is closed');
});