/**
 * @author slesh
 */

module.exports = (function (React, ReactDOM) {
    return React.createClass({
        render: function () {
            return (
                <div onClick={this.readNews} className="news">
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
        },
        readNews: function () {
            console.log("open news: ", this.props.news);
        }
    });
})(require("react"), require("react-dom"));