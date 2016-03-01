/**
 * News List
 * @author slesh
 */

module.exports = (function (React, ReactDOM, NewsForm) {
    var News = React.createClass({
        render: function () {
            return (
                <div className="news">
                    <div className="news--content">
                        <div className="news__header">
                            {this.props.news.title}
                            <div className="news--date">{this.props.news.date}</div>
                        </div>
                        <div className="news__body">
                            <img src="resources/1.jpg"/>
                            {this.props.news.content}
                        </div>
                    </div>
                </div>
            )
        }
    });

    return React.createClass({
        openNewsForm: function () {
            ReactDOM.render(<NewsForm/>, document.querySelector("#container"));
        },
        render: function () {
            return (
                <div>
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
                </div>
            )
        }
    });
})(require("react"), require("react-dom"), require("./news-form.jsx"));
