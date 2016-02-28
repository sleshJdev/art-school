/**
 * Body
 *
 * @author slesh
 */

module.exports = (function (React, ReactDOM, NewsForm, NewsList, NewsStore) {
    function renderNewsList() {
        ReactDOM.render(<NewsList newsList={NewsStore.getAllNews()}/>, document.getElementById("newsList"));
    }

    NewsStore.onChange(renderNewsList);

    return React.createClass({
        render: function () {
            return (
                <div>
                    <NewsForm/>
                    <div id="newsList"></div>
                </div>
            )
        }
    });
})(require("react"), require("react-dom"),
    require("./news-form.jsx"), require("./news-list.jsx"),
    require("./../stores/news-store"));

