var gulp = require('gulp');
var argv = require('yargs').argv;

module.exports = {
  min: !!argv.min
};

require('./gulp/tasks/copy');
require('./gulp/tasks/jade');
require('./gulp/tasks/sass');

gulp.task('default', ['copy', 'jade', 'sass']);



