var gulp = require('gulp');
var webpack = require('webpack-stream');

var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var config = require('../package.json').config;

gulp.task('webpack', function(){
	return gulp.src(config.src.js + '/**/*.js')
		.pipe(webpack({
			output: {
				filename: 'app.js'
			},
			devtool: 'source-map',
			module: {
				rules: [
					{
						test: /\.js$/, 
						exclude: /node_modules/, 
						loader: "babel-loader",
						query: {
							presets: ['env']
						}
					}
				]
			}
	    }))
  		.pipe(gulp.dest(config.build.js))
})

gulp.task('webpack-prod', function(){
	return gulp.src(config.src.js + '/**/*.js')
		.pipe(webpack({
			output: {
				filename: 'app.js'
			},
			plugins: [
		   		new UglifyJSPlugin()
		    ],
			module: {
				rules: [
					{
						test: /\.js$/, 
						exclude: /node_modules/, 
						loader: "babel-loader",
						query: {
							presets: ['env']
						}
					}
				]
			}
	    }))
  		.pipe(gulp.dest(config.build.js))
})

gulp.task('webpack:watch', function () {
	gulp.watch(config.src.js + '/**/*.js', ['webpack']);
});