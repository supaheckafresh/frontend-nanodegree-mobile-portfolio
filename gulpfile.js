//TODO add src and dist (or maybe dev / production ) folders to project. Output minified files to dist directory.

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css');

gulp.task('default',
    [
        'scripts',
        'styles'
    ]
);

gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename('perfmatters.min.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('styles', function() {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('minCSS/'));
});