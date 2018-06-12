const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

var config = require('../package.json').config;
 
gulp.task('nunjucks', function () {
	return gulp.src(config.src.html + '/**/*.html')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest(config.build.html))
});

gulp.task('nunjucks:watch', function () {
	gulp.watch(config.src.html + '/**/*.html', ['nunjucks']);
});