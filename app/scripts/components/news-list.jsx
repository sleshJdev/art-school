/**
 * News List
 * @author slesh
 */

module.exports = (function (React) {
    var News = React.createClass({
        render: function () {
            return (
                <div>
                    <p>{this.props.title}</p>
                    <div>
                        {this.props.content}
                    </div>
                </div>
            )
        }
    });

    return React.createClass({
        render: function () {
            return (
                <div>
                    {
                        this.props.newsList.map(function (news) {
                            return <News key={news.key} title={news.title} content={news.content}/>
                        })
                    }
                </div>
            )
        }
    });
})(require("react"));
