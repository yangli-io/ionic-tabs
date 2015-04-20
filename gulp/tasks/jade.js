/**
 * Created by yangli on 20/04/15.
 */

var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var ngTemplates = require('gulp-ng-templates');

var minified = module.parent.exports.min;

var jadeConfig = {
  pretty: !minified
};

gulp.task('jade-templates', function(){
  return gulp.src('./app/templates/**/*.jade')
    .pipe(plumber())
    .pipe(jade(jadeConfig))
    .pipe(ngTemplates({
      module: 'starter'
    }))
    .pipe(gulp.dest('./www/js'));
});

gulp.task('jade-index', function(){
  return gulp.src('./app/index.jade')
    .pipe(plumber())
    .pipe(jade(jadeConfig))
    .pipe(gulp.dest('./www/'));
});

gulp.task('jade', ['jade-templates', 'jade-index']);
