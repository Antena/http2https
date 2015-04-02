var http = require('http'),
    fs = require('fs'),
    util = require('util'),
    url = require('url'),
    logger = require('./logger');

var port = process.env.PORT || 3000;
    server = http.createServer(function(req, res) {
    res.writeHead(301, {'Location': 'https://' + req.headers.host  + req.url});
    res.end();
});

// Start server
server.listen(port, function(err) {
    logger.info('Listening on port ' + port);
});

server.on('error', function (e) {
    if (e.code == 'EADDRINUSE') {
        logger.error('Address in use, retrying...');
        setTimeout(function () {
            server.close();
            server.listen(port);
        }, 3000);
    }

    if (e.code == 'EACCES') {
        logger.error('No priviliges to open this port. Shutting down...');
        server.close();
    }
});
