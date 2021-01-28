const http = require('http');
const fs = require('fs');
// the callback function below runs everytime a request comes in to our server
const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

	// set header content type
	res.setHeader('Content-Type', 'text/html');

  // basic routing below
	let path = './views/';

	switch (req.url) {
		case '/':
			path += 'index.html';
			break;
		case '/about':
			path += 'about.html';
			break;
		default:
			path += '404.html';
			break;
	}

	// send an html file
	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			// if sending multiple files, use res.write() for each
			// res.write(data);
			res.end(data);
		}
	});

	// // write the content we want to send to the browser
	// res.write('<h1>hello universe</h1>');
	// res.write('<p>hello again, universe</p>');

	// // end the respond and send it to the browser
	// res.end()
});

// the listen() method so that the server actively listens for requests
// takes 3 arguments:
// 1. the port number
// port numbers are like 'doors' into a computer through which internet communications can be made to different programs.
// 2. the host name: default to 'localhost'
// localhost is like a domain name that takes you to a loopback ip address 127.0.0.1 that points back to your own computer.
// 3. the callback that runs when it starts listening
server.listen(3000, 'localhost', () => {
	console.log('listening for requests on port 3000');
});
