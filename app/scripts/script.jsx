/**
 * @author slesh
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Header = require("./components/header.jsx");
var Container = require("./components/body.jsx");

var Body = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                <Container/>
            </div>
        );
    }
});

ReactDOM.render(
    <Body/>,
    document.getElementById('container')
);