const mongoose = require('../datasource');

const newsSchema = mongoose.Schema({
    date: {type: Date, default: Date.now},
    title: String,
    content: String
});

const News = mongoose.model('news', newsSchema);

module.exports = News;