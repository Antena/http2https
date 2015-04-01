var http = require('http'),
    fs = require('fs'),
    util = require('util'),
    url = require('url');

var server = http.createServer(function(req, res) {
    res.writeHead(301, {'Location': 'https://' + req.headers.host  + req.url});
    res.end();
});

server.listen(80);
