/**
 * @author slesh
 */

var mongoose = require("mongoose");
var newsSchema = mongoose.Schema({
    name: String,
    content: String,
    date: String
});

module.exports = mongoose.model("news", newsSchema);