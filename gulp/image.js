var gulp = require('gulp');
var image = require('gulp-image');

var config = require('../package.json').config;
 
gulp.task('image', function () {
	gulp.src(config.src.img + '/*')
    	.pipe(image())
    	.pipe(gulp.dest(config.build.img));
});

gulp.task('image:watch', function () {
	gulp.watch(config.src.img + '/*', ['image']);
});