var winston = require('winston');

var logger = new (winston.Logger)({
    transports: [
        new winston.transports.File({
            filename: 'log/application.log',
            json: false
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({
            filename: 'log/exceptions.log',
            json: false
        })
    ]
});

module.exports = logger;