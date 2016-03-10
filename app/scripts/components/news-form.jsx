/**
 * News Form
 * @author slesh
 */

module.exports = (function (React, ReactDOM, NewsActions) {
    return React.createClass({
        getInitialState: function () {
            return {
                title: null,
                content: null
            }
        },
        handleInputChange: function (e) {
            e.preventDefault();
            this.state[e.target.name] = e.target.value;
        },
        render: function () {
            return (
                <form className="form" onSubmit={this.addNews}>
                    <div className="form__group">
                        <label htmlFor="anchor-news-title">Title</label>
                        <input type="text" id="anchor-news-title" className="form__control" name="title"
                               value={this.state.title} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form__group">
                        <label htmlFor="anchor-news-content">Content</label>
                        <textarea id="anchor-news-content" className="form__control" name="content" value={this.state.content} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form__group">
                        <button type="submit" className="form__control button--ok" onClick={this.addNews}>Save</button>
                        <button type="submit" className="form__control button--warning" onClick={this.cancel}>Cancel</button>
                    </div>
                </form>
            )
        },
        addNews: function (e) {
            e.preventDefault();
            var news = JSON.parse(JSON.stringify(this.state));
            NewsActions.addNews(news);
        },
        cancel: function () {
            //this.props.onCancel(this.state);
        }
    });
})(require("react"), require("react-dom"), require("news.actions"));
