// const http = require('http');
// const fs = require('fs')
// const url = require('url')
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// http.
//     createServer(function (req, res) {
//         let q = url.parse(req.url, true)
//         let filename = q.pathname === "/" ? "./index.html" : "." + q.pathname + ".html"
//         fs.readFile(filename, function(err, data) {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         });
//     }).listen(8080);
app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get("/contact-me", (req, res) => res.sendFile(path.join(__dirname, 'contact-me.html')));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, '404.html'), 404));

app.listen(port, () => console.log(`Listening on port ${port}`));