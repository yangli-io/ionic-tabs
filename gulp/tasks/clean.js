/**
 * Created by yangli on 21/04/15.
 */


var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function (cb) {
  del([
    'www/'
  ], cb);
});
