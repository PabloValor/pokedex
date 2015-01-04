var gulp = require('gulp'),
	less = require('gulp-less'),
	refresh = require('gulp-livereload');


gulp.task('less', function() {
	gulp.src('./public/css/*.less')
		.pipe(less())
		.pipe(gulp.dest('./public/build/css'))
		.pipe(refresh());
});

gulp.task('watch', function() {
	refresh.listen();
	gulp.watch('public/css/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);