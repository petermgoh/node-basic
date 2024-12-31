const http = require('http');

const port = 8080;

http.
    createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("hello");
    }).listen(8080);