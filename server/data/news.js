/**
 * @author slesh
 */

var mongoose = require("mongoose");
var newsSchema = mongoose.Schema({
    date: String,
    title: String,
    content: String
});

module.exports = mongoose.model("news", newsSchema);