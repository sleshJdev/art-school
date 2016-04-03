/**
 * @author slesh
 */

module.exports = (function (Dispatcher, NewsConstants) {
    return {
        addNews: function (news) {
            Dispatcher.dispatch({
                type: NewsConstants.NEWS_CREATE,
                data: news
            });
        },
        deleteNews: function (id) {
            Dispatcher.dispatch({
                type: NewsConstants.NEWS_DELETE,
                data: id
            });
        },
        getNews: function () {
            Dispatcher.dispatch({
                type: NewsConstants.NEWS_GET
            });
        }
    }
})(require("dispatcher"), require("news.constants"));