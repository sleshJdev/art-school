/**
 * Body
 *
 * @author slesh
 */

module.exports = (function (React, ReactDOM, NewsStore, NewsActions, NewsList) {
    NewsStore.onChange(function (newsList) {
        console.log(__filename, ", newsList: ", newsList);
        ReactDOM.render(<NewsList newsList={newsList}/>, document.querySelector("#container"));
    });
    return React.createClass({
        componentDidMount: NewsActions.getNews,
        render: function () {
            return (
                <div id="container" className="app__container"></div>
            )
        }
    });
})(require("react"), require("react-dom"), require("news.store"), require("news.actions"), require("./news-list.jsx"));

