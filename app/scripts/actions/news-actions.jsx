/**
 * @author slesh
 */

module.exports = (function (dispatcher) {
    return {
        addNews: function (news) {
            console.log("actions.addNews");
            dispatcher.dispatch({
                type: "news:addNews",
                data: news
            })
        }
    }
})(require("dispatcher"));