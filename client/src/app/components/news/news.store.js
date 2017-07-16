import newsService from '../service/news.service';
import dispatcher from '../core/'
import guid from 'guid';

module.exports = (function (NewsService, Guid, Dispatcher, NewsConstants) {
    var listeners = [];

    function addNews(news) {
        console.log("NewsStore.addNews(news), news: ", news);
        NewsService.addNews(news);
        triggerListeners();
    }

    function deleteNews(id) {
        console.log("NewsStore.deleteNews(id), id: ", id);
        NewsService.deleteNews(id);
        triggerListeners();
    }

    function getNews() {
        console.log("NewsStore.getNews()");
        triggerListeners();
    }

    function triggerListeners() {
        NewsService.getNews().then(function (response) {
            listeners.forEach(function (listener) {
                listener(response);
            });
        });
    }

    Dispatcher.register(function (payload) {
        switch (payload.type) {
            case NewsConstants.NEWS_CREATE:
                addNews(payload.data);
                break;
            case NewsConstants.NEWS_DELETE:
                deleteNews(payload.data);
                break;
            case NewsConstants.NEWS_GET:
                getNews();
                break;
        }
    });

    return {
        onChange: function (listener) {
            listeners.push(listener);
        }
    }
})(require("news.service"), require("guid"), require("dispatcher"), require("news.constants"));