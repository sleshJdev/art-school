import dispatcher from '../../dispatcher/dispatcher';
import newsConstants from './news.constants';

class NewsActions {
    static addNews(news) {
        dispatcher.dispatch({
            type: newsConstants.NEWS_CREATE,
            data: news
        });
    }

    static deleteNews(id) {
        dispatcher.dispatch({
            type: newsConstants.NEWS_DELETE,
            data: id
        });
    }

    static getNews() {
        dispatcher.dispatch({
            type: newsConstants.NEWS_GET
        });
    }
}

export default NewsActions;