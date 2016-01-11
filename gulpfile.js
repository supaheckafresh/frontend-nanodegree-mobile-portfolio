//TODO add src and dist (or maybe dev / production ) folders to project. Output minified files to dist directory.

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    inlineCSS = require('gulp-inline-css'),
    cssnano = require('gulp-cssnano'),
    imageOptim = require('gulp-image-optimization');

gulp.task('default',
    [
        'scripts',
        'styles',
        'html',
        'pizzaHtml',
        'images',
        'watch'
    ]
);

gulp.task('scripts', function () {
    gulp.src(['dev/js/*.js', 'dev/views/js/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('production/js/'));
});

gulp.task('styles', function () {
    gulp.src(['dev/css/*.css', 'dev/views/css/*.css'])
        .pipe(minifyCSS())
        .pipe(gulp.dest('production/css/'));
});

gulp.task('html', function () {
    var opts = {
        empty: true,
        spare: true
    };

    return gulp.src('dev/*.html')
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

// layout issues when inlining CSS on pizza.html - for now making separate task
gulp.task('pizzaHtml', function () {
    var opts = {
        empty: true,
        spare: true
    };

    return gulp.src('dev/views/*.html')
        .pipe(minifyHTML(opts))
        .pipe(cssnano())
        .pipe(gulp.dest('production/'));
});

gulp.task('images', function (cb) {
    gulp.src(['dev/img/*.jpg', 'dev/img/*png', 'dev/views/img/*jpg', 'dev/views/img/*png'])
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