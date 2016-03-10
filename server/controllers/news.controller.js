/**
 * @author slesh
 */

module.exports = (function (Express, News, Underscore) {
    var router = Express.Router();
    router.route("/news/:id?")
        .get(function (request, response) {
            console.log(__filename, ", get, body: ", request.body);
            News.find(function (error, news) {
                response.send(error || news);
            })
        })
        .post(function (request, response) {
            console.log(__filename, ", post, body: ", request.body);
            var news = new News(Underscore.extend({}, request.body));
            news.save(function (error) {
                response.send(error || news);
            })
        })
        .delete(function (request, response) {
            var id = request.params.id;
            News.remove({_id: id}, function (error, removed) {
                response.send(error || removed);
            })
        });
    return router;
})(require("express"), require("../data/news"), require("underscore"));