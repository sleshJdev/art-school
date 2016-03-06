/**
 * News List
 * @author slesh
 */

module.exports = (function (React, ReactDOM, News, NewsForm) {
    return React.createClass({
        render: function () {
            return (
                <div>
                    <div className="panel">
                        <button className="button--ok" onClick={this.openNewsForm}>Добавить новость</button>
                    </div>
                    <div>
                        {
                            this.props.newsList.map(function (news) {
                                return <News key={news.key} news={news}/>
                            })
                        }
                    </div>
                </div>
            )
        },
        openNewsForm: function () {
            ReactDOM.render(<NewsForm/>, document.querySelector("#container"));
        }
    });
})(require("react"), require("react-dom"), require("./news.jsx"), require("./news-form.jsx"));
