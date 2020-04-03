var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCSS = require('gulp-concat-css');
var imagemin = require('gulp-imagemin');

//minify all css files
gulp.task('minify-css', function() {
    return gulp.src('dev/css/*.css')
    .pipe(concatCSS('styles.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('production/styles'));
});

//optimize images
gulp.task('imagemin', function() {
    return gulp.src('dev/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('production/images'));
});

//watch all the changes in the folder
 gulp.task('watch', function() {
     gulp.watch('dev/css/*.css',gulp.series('minify-css'));
     gulp.watch('dev/images/*',gulp.series('imagemin'));
 });
