var gulp = require('gulp'),
	less = require('gulp-less'),
	refresh = require('gulp-livereload'),
	uglify = require('gulp-uglify'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename');

gulp.task('compress-javascript', function() {
	gulp.src([
			'./public/js/lib/underscore.min.js',
			'./public/js/lib/angular-route.min.js',
			'./public/js/*.js'
		])
		.pipe(concat('pokedex.js'))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./public/build/js/'))
		.on('error',gutil.log)
		.pipe(refresh());
});

gulp.task('less', function() {
	gulp.src('./public/css/pokedex.less')
		.pipe(less({compress: true}))
		.on('error', gutil.log)
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./public/build/css'))
		.pipe(refresh());
});

gulp.task('watch', function() {
	refresh.listen();

	gulp.watch('public/**/*.less', ['less']);
	gulp.watch('public/js/**/*.js', ['compress-javascript']);
});

gulp.task('default', ['less', 'watch', 'compress-javascript']);