/**
 * Created by yangli on 20/04/15.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var plumber = require('gulp-plumber');
var minified = module.parent.exports.min;

gulp.task('copy-bower-js', function(){
  return gulp.src('./bower_components/ionic/js/ionic.bundle.min.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./www/js/vendor/'));
});

gulp.task('copy-bower-css', function(){
  return gulp.src('./bower_components/ionic/css/ionic.min.css')
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./www/css/vendor/'));
});

gulp.task('copy-bower-fonts', function(){
  return gulp.src('./bower_components/ionic/fonts/**/*')
    .pipe(gulp.dest('./www/css/fonts/'));
});

gulp.task('copy-js', function(){
  return gulp.src('./app/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(gulpIf(minified, uglify({
      mangle: false
    })))
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('copy', ['copy-bower-js', 'copy-bower-css', 'copy-bower-fonts', 'copy-js']);