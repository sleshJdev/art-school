const gulp = require('gulp')
    , less = require('gulp-less')
    , browserify = require('browserify')
    , babelify = require('babelify')
    , fs = require('fs');

gulp.task('clean', function () {

});

gulp.task('js', function () {
    return browserify({
        entries: 'scripts/script.jsx',
        debug: true
    }).transform('babelify', {
        presets: ['react']
    }).bundle()
        .pipe('target/script.js');
});

gulp.task('css', function () {
    return gulp.src(['stylesheets/less/style.less'])
        .pipe(less({paths: 'app/stylesheets/less'}))
        .pipe(gulp.dest('app/stylesheets'));
});

gulp.task('bundle', ['js', 'css'], function () {
    return gulp.src(['views/index.html', 'stylesheets/style.css'])
        .pipe(gulp.dest('app/build'));
});

gulp.task('default', ['bundle']);