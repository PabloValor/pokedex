var gulp = require('gulp'),
	less = require('gulp-less'),
	refresh = require('gulp-livereload'),
	uglify = require('gulp-uglify'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin'),
	minifyCSS = require('gulp-minify-css'),
	jsonminify = require('gulp-jsonminify');

gulp.task('compress-json', function() {
	gulp.src('/public/pokemons.json')
		.pipe(jsonminify())
		.pipe(gulp.dest('/public/pokemons.json'));
});

gulp.task('compress-images', function() {
	gulp.src(['./public/img/**/*.jpg'])
		.pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
		.pipe(gulp.dest('./public/build/img/'))
		.on('error',gutil.log);
});

gulp.task('compress-javascript', function() {
	gulp.src([
			'./public/js/lib/jquery-2.1.3.min.js',
			'./public/js/lib/bootstrap.min.js',
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
		.pipe(less())
		.on('error', gutil.log)
		.pipe(minifyCSS({keepSpecialComments: 0}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./public/build/css'))
		.pipe(refresh());
});

gulp.task('watch', function() {
	refresh.listen();

	gulp.watch('public/**/*.less', ['less']);
	gulp.watch('public/js/**/*.js', ['compress-javascript']);
	gulp.watch('public/img/**/*.jpg', ['compress-images']);
});

gulp.task('default', ['less', 'watch', 'compress-javascript', 'compress-images', 'compress-json']);