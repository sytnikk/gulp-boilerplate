var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('../package.json').config;

gulp.task('dev', function () {
	runSequence(
		'copy',
		['nunjucks', 'sass', 'webpack', 'sprite', 'image'],
		'server',
		'copy:watch',
		'nunjucks:watch',
		'sass:watch',
		'webpack:watch',
		'sprite:watch',
		'image:watch',
	)
});

gulp.task('prod', function () {
	runSequence(
		'clean',
		'copy',
		['nunjucks', 'sass', 'webpack-prod', 'sprite', 'image']
	)
});