var gulp = require('gulp');
var minifyHtml = require("gulp-minify-html");
var sass = require('gulp-sass');  
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var browserSync = require('browser-sync');  

// MINIFY HTML
gulp.task('minify-html', function () {
    gulp.src('./Html/*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('path/to/destination'));
});

// SASS TO CSS
gulp.task('sass-to-css', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// CONCAT JS
gulp.task('concat-js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'));
});

// UGLIFY JS
gulp.task('uglify-js', function (cb) {
  pump([
        gulp.src('./dist/js/*.js'),
        uglify(),
        gulp.dest('./dist/js')
    ],
    cb
  );
});

// BROWSER SYNC
gulp.task('browser-sync', function() {  
    browserSync.init(["dist/css/*.css", "dist/js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

// WATCH
gulp.task('default', ['minify-html', 'sass-to-css', 'concat-js', 'uglify-js', 'browser-sync'], function () {  
    gulp.watch("src/scss/*.scss", ['sass']);
});


