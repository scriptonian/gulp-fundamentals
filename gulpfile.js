var gulp = require('gulp');
//var jshint = require('gulp-jshint');
//var jscs = require('gulp-jscs');
//var myPrint = require('gulp-print');
var s$ = require('gulp-load-plugins')({lazy : true});
var config = require('./gulp.config')();

gulp.task('inspector', function () {
    return gulp
        .src(config.jsFiles)
        .pipe(s$.print())
        .pipe(s$.jshint())
        .pipe(s$.jscs())
        .pipe(s$.jshint.reporter('jshint-stylish', {verbose: true}));
});

//HELLO GULP TASK
gulp.task('hello-gulp', function () {
    console.log("Yay My First Gulp Task");
});