import HttpService from '../../services/http';

class NewsService {
    static addNews(news) {
        console.log('NewService.addNews(), news: ', news);
        return HttpService.post('/api/news', news);
    }

    static deleteNews(id) {
        console.log('NewService.deleteNews(), id: ', id);
        return HttpService.del('/api/news/' + id);
    }

    static getNews() {
        console.log('NewService.getNews()');
        return HttpService.get('/api/news').then((newsList) => {
            console.log(newsList);
        });
    }
}

export default NewsService;