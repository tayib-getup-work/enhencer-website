var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');


gulp.task('pack-js', function () {
    return gulp.src(['required/*.js'])
        .pipe(minify({
            ext: {
                min: '.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('assests'));
});

gulp.task('pack-css', function () {
    return gulp.src(['required/*.css'])
        .pipe(cleanCss())
        .pipe(gulp.dest('assests'));
});

gulp.task('default', ['pack-js', 'pack-css']);

