var gulp = require('gulp');
var argv = require('yargs').argv;

module.exports = {
  min: !!argv.min
};

require('./gulp/tasks/copy');
require('./gulp/tasks/jade');
require('./gulp/tasks/sass');
require('./gulp/tasks/clean');

gulp.task('build', ['copy', 'jade', 'sass']);
gulp.task('default', ['clean'], function(){
  gulp.start('build');
});



