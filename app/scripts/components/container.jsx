/**
 * Body
 *
 * @author slesh
 */

module.exports = (function (React) {
    return React.createClass({
        render: function () {
            return (
                <div className="app__container">
                    <div id="container"></div>
                </div>
            )
        }
    });
})(require("react"));

