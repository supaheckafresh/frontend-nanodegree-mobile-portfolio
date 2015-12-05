//TODO add src and dist (or maybe dev / production ) folders to project. Output minified files to dist directory.

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    imageOptim = require('gulp-image-optimization');

gulp.task('default',
    [
        'scripts',
        'styles',
        'watch'
    ]
);

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('css/*.css', ['styles']);
});

gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename('perfmatters.min.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('styles', function () {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/'));
});

gulp.task('images', function (cb) {
    gulp.src(['img/*.jpg', 'img/*png', 'views/images/*jpg', 'views/images/*png'])
        .pipe(imageOptim({
            optimizationLevel: 6,
            progressive: true,
            interlaced: true
        })).pipe(gulp.dest('production/img')).on('end', cb).on('error', cb);
});