const winston = require('winston')
    , path = require('path')
    , conf = require('../../configuration');

function getLogger(module) {
    return new winston.Logger({
        transports: [
            new winston.transports.Console({
                timestamp: true,
                label: path.basename(module.filename),
                level: conf.get('NODE_ENV') === 'development' ? 'debug' : 'error',
                colorize: true
            }),
            new winston.transports.File({
                filename: 'server.log',
                level: 'debug'
            })
        ]
    });
}

module.exports = getLogger;