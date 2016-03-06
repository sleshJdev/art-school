/**
 * @author slesh
 */

var gulp = require("gulp");
var less = require('gulp-less');
var browserify = require("browserify");
var babelify = require("babelify");
var fs = require("fs");

gulp.task("bundle", function () {
    return browserify({
        entries: "app/scripts/script.jsx",
        debug: true
    }).transform("babelify", {
        presets: ["react"]
    }).bundle().pipe(fs.createWriteStream("app/build/script.js"));
});

gulp.task("less", function () {
    gulp.src(["app/stylesheets/less/style.less"])
        .pipe(less({paths: "app/stylesheets/less"}))
        .pipe(gulp.dest("app/stylesheets"));
});

gulp.task("copy", ["less", "bundle"], function () {
    gulp.src(["app/views/index.html", "app/stylesheets/style.css"])
        .pipe(gulp.dest("app/build"));
});

gulp.task("default", ["copy"], function () {
    console.log("gulp completed!");
});