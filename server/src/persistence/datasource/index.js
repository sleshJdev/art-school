const mongoose = require('mongoose')
    , logger = require('../../utils/logger')(module)
    , conf = require('../../configuration');

mongoose.connect(
    conf.get('mongoose:url'),
    conf.get('mongoose:options')
).then(
    () => {
        logger.info('database connection has been established');
    },
    () => {
        logger.error('connection failed');
    }
);

module.exports = mongoose;

