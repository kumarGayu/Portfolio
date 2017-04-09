var gulp = require("gulp");
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html","app/lib/**/*","app/lib/**/**/*","app/main.css"])
        .pipe(gulp.dest("app/dist"));
});

gulp.task('watch', function () {
    watch(['**/*.jsx'], batch(function (events, done) {
        gulp.start('bundle', done);
    }));
});

gulp.task("default",["copy"],function(){
   console.log("Gulp completed...");
});
