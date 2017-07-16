import React from 'react';
import ReactDOM from 'react-dom';

import newsStore from '../../components/news/news.store';
import newsAction from '../../components/news/news.actions';
import NewsList from '../../components/news/components/news-list';

newsStore.onChange(function (newsList) {
    ReactDOM.render(<NewsList newsList={newsList}/>, document.querySelector('#container'));
});

const Container = React.createClass({
    componentDidMount: newsAction.getNews,
    render() {
        return (
            <div id='container' className='app__container'/>
        );
    }
});

export default Container;


