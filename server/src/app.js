const
    express = require('express')
    , bodyParser = require('body-parser')
    , conf = require('./configuration')
    , path = require('path')
    , log = require('./utils/logger')(module)
;

const app = new express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(require('morgan')('dev'));
app.use('/api', [
    require('./routes/news.route')
]);

app.listen(conf.get('port'), function () {
    log.info('server has been started');
});


