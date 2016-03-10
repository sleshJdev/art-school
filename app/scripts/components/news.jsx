/**
 * @author slesh
 */

module.exports = (function (React, ReactDOM) {
    var NewsPage = React.createClass({
        render: function () {
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
                </div>
            )
        }
    });

    return React.createClass({
        render: function () {
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
        readNews: function () {
            ReactDOM.render(<NewsPage news={this.props.news}/>, document.querySelector("#container"));
        }
    });
})(require("react"), require("react-dom"));