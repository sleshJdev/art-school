/**
 * @author slesh
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Header = require("./components/header.jsx");
var Container = require("./components/container.jsx");
var Footer = require("./components/footer.jsx");

var App = React.createClass({
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