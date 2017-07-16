import React from 'react';
import ReactDOM from 'react-dom';

import NewsActions from '../../components/news/news.actions';

import Students from '../../components/students/components/students';
import Parents from '../../components/parents/components/parents';
import MenuItem from './menu-item';

const Header = React.createClass({
    render() {
        return (
            <header className="app__header">
                <div className="menu">
                    <MenuItem title="Новости" onClick={this.openNewsLink}/>
                    <MenuItem title="Поступающим" onClick={this.openForStudentsLink}/>
                    <MenuItem title="Родителям" onClick={this.openForParentsLink}/>
                </div>
            </header>
        );
    },
    openNewsLink() {
        NewsActions.getNews();
    },
    openForStudentsLink() {
        ReactDOM.render(<Students/>, document.querySelector("#container"));
    },
    openForParentsLink() {
        ReactDOM.render(<Parents/>, document.querySelector("#container"));
    }
});

export default Header;
