var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('../package.json').config;

gulp.task('dev', function () {
	runSequence(
		'copy',
		['sass', 'webpack', 'sprite'],
		'server',
		'copy:watch',
		'sass:watch',
		'webpack:watch',
		'sprite:watch'
	)
});