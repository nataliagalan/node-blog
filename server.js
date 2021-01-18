const http = require('http');

// the callback function below runs everytime a request comes in to our server 
const server = http.createServer((req, res) => {
  console.log('request made');
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
})