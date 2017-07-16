const gulp = require('gulp')
    , connect = require('gulp-connect')
    , rename = require('gulp-rename')
    , uglify = require('gulp-uglify')
    , sourcemaps = require('gulp-sourcemaps')
    , gutil = require('gulp-util')
    , less = require('gulp-less')
    , concat = require('gulp-concat')

    , path = require('path')

    , babelify = require('babelify')
    , watchify = require('watchify')
    , browserify = require('browserify')

    , source = require('vinyl-source-stream')
    , buffer = require('vinyl-buffer')
;

const paths = {
    HTML: 'src/index.html',
    STYLE_SRC: 'src/assets/less/**/*.less',
    STYLE_PATHS: ['src/assets/less'],
    STYLE_ENTRY: 'src/assets/less/style.less',
    MINIFIED_OUT: 'bundle.min.js',
    MINIFIED_VENDOR_NAME: 'vendor.min.js',
    OUT: 'bundle.js',
    VENDOR: ['bower_components/jquery/dist/jquery.min.js'],
    DEST: 'public',
    ENTRY_POINT: './src/app/app.jsx'
};

const babel = babelify.configure({
    presets: ['es2015', 'react']
});

const bundleSettings = {
    entries: [paths.ENTRY_POINT],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {}
};
const watchSettings = {
    delay: 200,
    ignoreWatch: ['**/node_modules/**'],
    poll: false
};

function createBundle(bundler) {
    return bundler.bundle()
        .on('error', gutil.log)
        .pipe(source(paths.OUT))
        .pipe(buffer())
        .pipe(gulp.dest(paths.DEST))
        .pipe(rename(paths.MINIFIED_OUT))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.DEST));
}

gulp.task('less', () => {
    return gulp.src(paths.STYLE_ENTRY)
        .pipe(less({
            paths: paths.STYLE_PATHS
        }))
        .pipe(gulp.dest(paths.DEST));
});

const bundler = browserify(bundleSettings).transform(babel);
const watcher = watchify(bundler, watchSettings);

gulp.task('bundle', () => createBundle(bundler));

gulp.task('copy:vendor', () => {
    return gulp.src(paths.VENDOR)
        .pipe(concat(paths.MINIFIED_VENDOR_NAME))
        .pipe(gulp.dest(paths.DEST));
});

gulp.task('copy', () => {
    return gulp.src(paths.HTML)
        .pipe(gulp.dest(paths.DEST));
});

gulp.task('server', () => {
    connect.server({
        root: ['.', 'public'],
        livereload: true,
        port: 9001
    });
});

gulp.task('watch', () => {
    gulp.watch(paths.HTML, ['copy']);
    gulp.watch(paths.STYLE_SRC, ['less']);

    watcher.on('update', () => {
        gutil.log('update');
        createBundle(bundler);
    });
});

gulp.task('default', ['copy', 'server', 'less', 'bundle', 'copy:vendor', 'watch']);