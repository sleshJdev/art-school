/**
 * News Form
 * @author slesh
 */

module.exports = (function (React, actions) {
    return React.createClass({
        getInitialState: function () {
            return {
                title: null,
                content: null
            }
        },
        addNews: function (e) {
            e.preventDefault();
            actions.addNews(this.state);
        },
        handleInputChange: function (e) {
            e.preventDefault();
            var name = e.target.name;
            var value = e.target.value;
            var state = this.state;
            state[name] = value;
            this.setState(state);
        },
        render: function () {
            return (
                <form className="form" onSubmit={this.addNews}>
                    <div className="form__group">
                        <label htmlFor="anchor-news-title">Title</label>
                        <input type="text" id="anchor-news-title" className="form__control" name="title" value={this.state.title}
                               onChange={this.handleInputChange}/>
                    </div>
                    <div className="form__group">
                        <label htmlFor="anchor-news-content">Content</label>
                        <textarea id="anchor-news-content" className="form__control" name="content" value={this.state.content} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form__group">
                        <button type="submit" className="form__control button--ok">Save</button>
                        <button type="submit" className="form__control button--warning">Cancel</button>
                    </div>
                </form>
            )
        }
    });

})(require("react"), require("../actions/news-actions.jsx"));
