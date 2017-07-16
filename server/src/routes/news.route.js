const express = require('express')
    , router = express.Router()
    , News = require('../persistence/model/news')
    , _ = require('lodash');

router
    .route('/news/:id?')
    .get((request, response) => {
        const filter = request.params.id ?
            {_id: request.params.id} : {};
        News.find(filter, (error, news) => {
            response.send(news);
        });
    })
    .post(function (request, response) {
        const news = new News(_.clone(request.body));
        news.save(function () {
            response.send(news);
        })
    })
    .delete(function (request, response) {
        const id = request.params.id;
        News.remove({_id: id}, function (error, removed) {
            response.send(removed);
        })
    });

module.exports = router;

