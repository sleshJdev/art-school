/**
 * Body
 *
 * @author slesh
 */

module.exports = (function (React, ReactDOM, NewsStore, NewsList) {
    function showNewsList(_) {
        ReactDOM.render(<NewsList newsList={NewsStore.getAllNews()}/>, document.querySelector("#container"));
    }

    NewsStore.onChange(showNewsList);

    return React.createClass({
        componentDidMount: showNewsList,
        render: function () {
            return (
                <div id="container" className="app__container"></div>
            )
        }
    });
})(require("react"), require("react-dom"), require("news.store"), require("./news-list.jsx"));

