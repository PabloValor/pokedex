var gulp = require('gulp'),
	less = require('gulp-less'),
	refresh = require('gulp-livereload'),
	gutil = require('gulp-util');


gulp.task('less', function() {
	gulp.src('./public/css/main.less')
		.pipe(less({compress: true}))
		.on('error', gutil.log)
		.pipe(gulp.dest('./public/build/css'))
		.pipe(refresh());
});

gulp.task('watch', function() {
	refresh.listen();

	gulp.watch('public/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);