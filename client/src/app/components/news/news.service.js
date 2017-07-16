import httpUtils from '../utils/http.utils';

const newsService = {
    addNews: function (news) {
        console.log('NewService.addNews(), news: ', news);
        return httpUtils.post('/api/news', news);
    },
    deleteNews: function (id) {
        console.log('NewService.deleteNews(), id: ', id);
        return httpUtils.del('/api/news/' + id);
    },
    getNews: function () {
        console.log('NewService.getNews()');
        return httpUtils.get('/api/news');
    }
};

module.exports = newsService;