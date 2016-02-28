/**
 * Header
 * @author slesh
 */

module.exports = (function (React) {
    var MenuItem = React.createClass({
        render: function () {
            return (
                <div className="menu__item">
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
                <header>
                    <div className="menu">
                        <MenuItem title="Главная"/>
                        <MenuItem title="Новости"/>
                        <MenuItem title="Поступающим"/>
                        <MenuItem title="Родителям"/>
                    </div>
                </header>
            )
        }
    });
})(require("react"));
