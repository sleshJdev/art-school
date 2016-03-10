/**
 * @author slesh
 */


var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var newsController = require("./controllers/news.controller.js");

console.log(__dirname, ", path: ", path.join(__dirname, "../app/build"));
var app = express();
app.use(express.static(path.join(__dirname, "../app/build")));
app.use(bodyParser.json());
app.use("/api", newsController);
app.listen(9090, function () {
    console.log("server is started");
});

mongoose.connect("mongodb://localhost/art-school");