import React from 'react';

import newsActions from '../news.actions';

const NewsPage = React.createClass({
    render() {
        return (
            <div className="news--page">
                <div className="news">
                    <div className="news__header">
                        {this.props.news.title}
                        <div className="news--date">{this.props.news.date}</div>
                    </div>
                    <div className="news__content">
                        <img src="resources/1.jpg"/>
                        {this.props.news.content}
                    </div>
                </div>
                <div className="news--page__controls">
                    <button className="button--danger" onClick={this.deleteNews}>Удалить</button>
                </div>
            </div>
        )
    },
    deleteNews() {
        newsActions.deleteNews(this.props.news._id);
    }
});

export default NewsPage;