var gulp = require('gulp'),
	less = require('gulp-less'),
	refresh = require('gulp-livereload'),
	uglify = require('gulp-uglify'),
	gutil = require('gulp-util');

gulp.task('compress-javascript', function() {
	gulp.src('./public/js/*.js')
		.pipe(uglify())
		.on('error',gutil.log)
		.pipe(gulp.dest('./public/build/js'))
		.pipe(refresh());
});


gulp.task('less', function() {
	gulp.src('./public/css/main.less')
		.pipe(less())
		.on('error', gutil.log)
		.pipe(gulp.dest('./public/build/css'))
		.pipe(refresh());
});

gulp.task('watch', function() {
	refresh.listen();

	gulp.watch('public/**/*.less', ['less']);
	gulp.watch('public/js/*.js', ['compress-javascript']);
});

gulp.task('default', ['less', 'watch', 'compress-javascript']);