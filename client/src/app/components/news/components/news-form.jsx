import React from 'react';

import newsActions from '../news.actions';

const NewsForm = React.createClass({
    getInitialState() {
        return {
            title: null,
            content: null
        }
    },
    render() {
        return (
            <form className="form" onSubmit={this.addNews}>
                <div className="form__group">
                    <label htmlFor="anchor-news-title">Title</label>
                    <input type="text" id="anchor-news-title" className="form__control" name="title"
                           value={this.state.title} onChange={this.handleInputChange}/>
                </div>
                <div className="form__group">
                    <label htmlFor="anchor-news-content">Content</label>
                    <textarea id="anchor-news-content" className="form__control" name="content"
                              value={this.state.content} onChange={this.handleInputChange}/>
                </div>
                <div className="form__group">
                    <button type="submit" className="form__control button--ok" onClick={this.addNews}>Save</button>
                    <button type="submit" className="form__control button--warning" onClick={this.cancel}>Cancel
                    </button>
                </div>
            </form>
        )
    },
    handleInputChange(e) {
        e.preventDefault();
        this.state[e.target.name] = e.target.value;
    },
    addNews(e) {
        e.preventDefault();
        let news = JSON.parse(JSON.stringify(this.state));
        news.date = new Date();
        newsActions.addNews(news);
    },
    cancel() {
        //this.props.onCancel(this.state);
    }
});

export default NewsForm;
