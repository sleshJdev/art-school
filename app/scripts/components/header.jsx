/**
 * Header
 * @author slesh
 */

module.exports = (function (React, ReactDOM, NewsList, ForStudents, ForParents, NewsActions) {
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
        render: function () {
            return (
                <header className="app__header">
                    <div className="menu">
                        <MenuItem title="Новости" onClick={this.openNewsLink}/>
                        <MenuItem title="Поступающим" onClick={this.openForStudentsLink}/>
                        <MenuItem title="Родителям" onClick={this.openForParentsLink}/>
                    </div>
                </header>
            )
        },
        openNewsLink: function () {
            NewsActions.getNews();
        },
        openForStudentsLink: function () {
            ReactDOM.render(<ForStudents/>, document.querySelector("#container"));
        },
        openForParentsLink: function () {
            ReactDOM.render(<ForParents/>, document.querySelector("#container"));
        }
    });
})(require("react"), require("react-dom"),
    require("./news-list.jsx"), require("./for-students.jsx"), require("./for-parents.jsx"),
    require("news.actions"));
