import React from 'react';

const MenuItem = React.createClass({
    render() {
        return (
            <div className="menu__item" onClick={this.props.onClick}>
                <div className="menu__item--icon">ICON</div>
                <div className="menu__item--content">{this.props.title}</div>
                <div className="menu__item--image">ICON</div>
            </div>
        );
    }
});

export default  MenuItem;