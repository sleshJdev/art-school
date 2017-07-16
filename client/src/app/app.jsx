const React = require('react')
    , ReactDOM = require('react-dom')
    , Header = require("./components/header.jsx")
    , Container = require("./components/container.jsx")
    , Footer = require("./components/footer.jsx");

const App = React.createClass({
    render: function () {
        return (
            <div className="app">
                <Header/>
                <Container/>
                <Footer/>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.querySelector("#app"));