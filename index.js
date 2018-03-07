// write your code here
var http = require('http');
var hostname = '127.0.0.1';

var server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World');
});

server.listen(8080, hostname, function() {
    console.log('Server started on port 8080');
});