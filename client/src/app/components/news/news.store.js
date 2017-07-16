import newsService from './news.service';
import newsConstants from './news.constants';
import dispatcher from '../../dispatcher/dispatcher'

const listeners = [];

function addNews(news) {
    console.log("NewsStore.addNews(news), news: ", news);
    newsService.addNews(news);
    triggerListeners();
}

function deleteNews(id) {
    console.log("NewsStore.deleteNews(id), id: ", id);
    newsService.deleteNews(id);
    triggerListeners();
}

function getNews() {
    console.log("NewsStore.getNews()");
    triggerListeners();
}

function triggerListeners() {
    newsService.getNews().then(function (response) {
        listeners.forEach(function (listener) {
            listener(response);
        });
    });
}

dispatcher.register(function (payload) {
    switch (payload.type) {
        case newsConstants.NEWS_CREATE:
            addNews(payload.data);
            break;
        case newsConstants.NEWS_DELETE:
            deleteNews(payload.data);
            break;
        case newsConstants.NEWS_GET:
            getNews();
            break;
    }
});

const NewsStore = {
    onChange: function (listener) {
        listeners.push(listener);
    }
};

export default NewsStore;