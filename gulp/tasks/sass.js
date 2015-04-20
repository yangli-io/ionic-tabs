/**
 * Created by yangli on 20/04/15.
 */

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var minCSS = require('gulp-minify-css');

gulp.task('sass', function () {
  return sass('./app/sass/main.scss')
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(minCSS())
    .pipe(gulp.dest('./www/css/'));
});