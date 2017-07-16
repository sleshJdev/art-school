import React from 'react';
import ReactDOM from 'react-dom';

import Header from './scene/main/header';
import Container from './scene/main/container';
import Footer from './scene/main/footer';

const App = React.createClass({
    render: () => (
        <div className="app">
            <Header/>
            <Container/>
            <Footer/>
        </div>
    )
});

ReactDOM.render(<App/>, document.querySelector('#app'));