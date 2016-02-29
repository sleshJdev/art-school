/**
 * News List
 * @author slesh
 */

module.exports = (function (React) {
    var News = React.createClass({
        render: function () {
            return (
                <div className="news">
                    <div class="news--content">
                        <div className="news__header">
                            {this.props.title}
                            <div className="news--date">{this.props.date}</div>
                        </div>
                        <div className="news__body">
                            <img src="resources/1.jpg"/>
                            {this.props.content}
                        </div>
                    </div>
                </div>
            )
        }
    });

    return React.createClass({
        render: function () {
            return (
                <div className="news--list">
                    {
                        this.props.newsList.map(function (news) {
                            return <News key={news.key} title={news.title} content={news.content} date={news.date}/>
                        })
                    }
                </div>
            )
        }
    });
})(require("react"));
