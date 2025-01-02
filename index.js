const http = require('http');
const fs = require('fs')
const port = 8080;

http.
    createServer(function (req, res) {
        switch (req.url) {
            case '/':
                page = "index.html"
                break
            case '/about':
                page = "about.html"
                break
            case '/contact-me':
                page = "contact-me.html"
                break
            default:
                page = "404.html"
        };
        fs.readFile(page, function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }).listen(8080);