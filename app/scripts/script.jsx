/**
 * @author slesh
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Header = require("./components/header.jsx");
var Body = require("./components/body.jsx");

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.querySelector("#app"));