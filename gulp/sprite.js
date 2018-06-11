var gulp = require('gulp');

var buffer = require('vinyl-buffer');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');

var spritesmith = require('gulp.spritesmith');

var config = require('../package.json').config;


gulp.task('sprite', function () {
  var spriteData = gulp.src(config.src.img + '/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '__sprite.sass'
  }));
 
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest(config.build.img));
 
  var sassStream = spriteData.css
    .pipe(gulp.dest(config.src.sass));
 
  return merge(imgStream, sassStream);
});

gulp.task('sprite:watch', function () {
	gulp.watch(config.src.img + '/sprite/*.png', ['sprite']);
});