const nconf = require('nconf')
    , path = require('path');

nconf.defaults({
    NODE_ENV: 'development'
});

nconf.argv().env()
    .file({file: path.join(__dirname, 'configuration.json')});

module.exports = nconf;