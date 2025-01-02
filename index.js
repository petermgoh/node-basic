const http = require('http');
const fs = require('fs')
const url = require('url')

const port = 8080;

http.
    createServer(function (req, res) {
        let q = url.parse(req.url, true)
        let filename = q.pathname === "/" ? "./index.html" : "." + q.pathname + ".html"
        fs.readFile(filename, function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }).listen(8080);