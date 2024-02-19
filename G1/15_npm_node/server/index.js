const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	const reqUrl = url.parse(req.url, true);
	console.log('URL', reqUrl);
	console.log('Method', req.method);

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	if (reqUrl.pathname === '/animals') {
		res.end('Here is the list of animals...');
	} else if (reqUrl.pathname === '/zookeepers') {
		res.end('Here is the list of zookeepers...');
	} else {
		res.end('Not found');
	}
});

console.log(server);

const PORT = 3000;

server.listen(PORT, () => {
	console.log('Server is listening...');
});
