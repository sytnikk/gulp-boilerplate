var gulp = require('gulp');

var config = require('../package.json').config;

gulp.task('copy', function(){
	return gulp.src('src/**/*')
  		.pipe(gulp.dest('build/'))
})

gulp.task('copy:watch', function () {
	gulp.watch(config.src.all, ['copy']);
});