/**
 * Header
 * @author slesh
 */

module.exports = (function (React, ReactDOM, ForStudents, NewsList, NewsStore) {
    var MenuItem = React.createClass({
        render: function () {
            return (
                <div className="menu__item" onClick={this.props.onClick}>
                    <div className="menu__item--icon">ICON</div>
                    <div className="menu__item--content">{this.props.title}</div>
                    <div className="menu__item--image">ICON</div>
                </div>
            )
        }
    });

    return React.createClass({
        openNewsLink: function () {
            ReactDOM.render(<NewsList newsList={NewsStore.getAllNews()}/>, document.querySelector("#container"));
        },
        openForStudentsLink: function () {
            ReactDOM.render(<ForStudents/>, document.querySelector("#container"));
        },
        render: function () {
            return (
                <header className="app__header">
                    <div className="menu">
                        <MenuItem title="Новости" onClick={this.openNewsLink}/>
                        <MenuItem title="Поступающим" onClick={this.openForStudentsLink}/>
                        <MenuItem title="Родителям"/>
                    </div>
                </header>
            )
        }
    });
})(require("react"), require("react-dom"),
    require("./for-students.jsx"),
    require("./news-list.jsx"),
    require("../stores/news-store"));
