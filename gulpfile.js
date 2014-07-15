var gulp = require('gulp');
var browserify = require('gulp-browserify');
var jshint = require('gulp-jshint');

gulp.task('scripts', function() {
	gulp.src('src/js/bundle.js')
		.pipe(browserify({
			insertGlobals : true,
			entry: true
		}))
		.pipe(gulp.dest('./public/js/'));
});

gulp.task('lint', function() {
	gulp.src('src/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', ['scripts', 'lint'], function () {
	var watcher = gulp.watch('./src/**/*.js', ['lint', 'scripts']);
	watcher.on('change', function (event) {
		console.log('File ' + event.path + ' was ' + event.type + ', building scripts...');
	});
});

gulp.task('default', ['scripts', 'lint', 'watch']);
