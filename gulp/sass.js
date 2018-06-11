var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var config = require('../package.json').config

var plugins = [
	autoprefixer({browsers: ['last 2 version']}),
	cssnano()
]
 
gulp.task('sass', function () {
 	return gulp.src(config.src.sass + '/**/*.sass')
    	.pipe(sass().on('error', sass.logError))
    	.pipe(postcss(plugins))
    	.pipe(gulp.dest(config.build.css));
});
 
gulp.task('sass:watch', function () {
	gulp.watch(config.src.sass + '/**/*.sass', ['sass']);
});