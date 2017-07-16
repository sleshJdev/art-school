import React from 'react';
import ReactDOM from 'react-dom';

import NewsPage from '../components/news-page';

const News = React.createClass({
    render() {
        return (
            <div onClick={this.readNews} className="news">
                <div className="news__header">
                    {this.props.news.title}
                    <div className="news--date">{this.props.news.date}</div>
                </div>
                <div className="news__content">
                    <img src="resources/1.jpg"/>
                    {this.props.news.content}
                </div>
            </div>
        )
    },
    readNews() {
        ReactDOM.render(<NewsPage news={this.props.news}/>, document.querySelector("#container"));
    }
});

export default News;