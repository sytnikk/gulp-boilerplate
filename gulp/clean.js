var gulp = require('gulp');
var clean = require('gulp-clean');

var config = require('../package.json').config;

gulp.task('clean', function (){
	return gulp.src('build', {read: false})
    	.pipe(clean());
})