/**
 * @author slesh
 */

var http = require("http");

http.createServer(function (req, res) {
    req.end("Hello + ", req.getParameter("name"));
}).listen(8080);