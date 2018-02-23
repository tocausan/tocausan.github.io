var gulp = require('gulp');
var minifyHtml = require("gulp-minify-html");
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var browserSync = require('browser-sync');

gulp.task('minify-html', function () {
    gulp.src('./src/**/*.html') // path to your files
        .pipe(minifyHtml())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(concat('app.css'))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('concat-js', function () {
    return gulp.src('./src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify-js', function (cb) {
    pump([
            gulp.src('./dist/js/*.js'),
            uglify(),
            gulp.dest('./dist/js')
        ],
        cb
    );
});

gulp.task('browser-sync', function () {
    browserSync.init(["dist/css/*.css", "dist/js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('browser-sync-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['minify-html', 'sass', 'concat-js', 'uglify-js', 'browser-sync'], function () {
    gulp.watch("src/**/*.js", ['concat-js', 'browser-sync-reload']);
    gulp.watch("src/**/*.scss", ['sass', 'browser-sync-reload']);
    gulp.watch("src/**/*.html", ['minify-html', 'browser-sync-reload']);
});


