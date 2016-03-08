/**
 * @author slesh
 */

var mongoose = require("mongoose");
var News = require("../data/news");
var _ = require("underscore");

var route = require("express").Router();
route.route("/news/:id?")
    .get(function (reques, response) {
        News.find(function (error, news) {
            response.send(error || news);
        })
    })
    .post(function (request, response) {
        var news = new News(_.extend({}, request.body));
        news.save(function (error) {
            response.send(error || news);
        })
    });

module.exports = route;