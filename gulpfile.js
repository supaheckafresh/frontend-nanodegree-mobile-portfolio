//TODO add src and dist (or maybe dev / production ) folders to project. Output minified files to dist directory.

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    inlineCSS = require('gulp-inline-css'),
    imageOptim = require('gulp-image-optimization');

gulp.task('default',
    [
        'scripts',
        'styles',
        'html',
        'images',
        'watch'
    ]
);

gulp.task('scripts', function () {
    gulp.src('dev/js/*.js')
        .pipe(uglify())
        .pipe(rename('perfmatters.min.js'))
        .pipe(gulp.dest('production/js/'));
});

gulp.task('styles', function () {
    gulp.src('dev/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('production/css/'));
});

gulp.task('html', function () {
    var opts = {
        empty: true,
        spare: true
    };

    return gulp.src('dev/index.html')
        .pipe(minifyHTML(opts))
        .pipe(inlineCSS({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true,
            preserveMediaQueries: true
        }))
        .pipe(gulp.dest('production/'));
});

gulp.task('images', function (cb) {
    gulp.src(['dev/img/*.jpg', 'dev/img/*png', 'dev/views/images/*jpg', 'dev/views/images/*png'])
        .pipe(imageOptim({
            optimizationLevel: 6,
            progressive: true,
            interlaced: true
        })).pipe(gulp.dest('production/img')).on('end', cb).on('error', cb);
});

gulp.task('watch', function () {
    gulp.watch('dev/js/*.js', ['scripts']);
    gulp.watch('dev/css/*.css', ['styles']);
    gulp.watch('dev/index.html', ['html']);
    gulp.watch(['dev/img/*.jpg', 'dev/img/*.png'], ['images']);
});