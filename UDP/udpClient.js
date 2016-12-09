var dgram = require('dgram'),
	client = dgram.createSocket('udp4');

process.stdin.resume();
process.stdin.on('data', (data) => {
	client.send(data, 0, data.length, 3000, 'localhost', (err, bytes) => {
		if (err)
			console.log('error:' + err);
		else
			console.log('  Отправлено.\n');
	});
});