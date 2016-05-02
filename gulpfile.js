var gulp 		= require('gulp'),
	browserSync = require('browser-sync'),
	watch		= require('gulp-watch'),
//	sass	    = require('gulp-sass'),
	concat      = require('gulp-concat'),
	plumber	    = require('gulp-plumber'),
	cssMin		= require('gulp-clean-css'),
	uglify	    = require('gulp-uglify'),
	maps        = require('gulp-sourcemaps'),
	prefixer 	= require('gulp-autoprefixer'),
	jshint		= require('gulp-jshint'),
	//useref		= require ('gulp-useref'),
	imagemin 	= require('gulp-imagemin'),
	pngquant	= require('imagemin-pngquant');
	  

// ----------------------------------------
	var onError = function(err){
		console.log(err);
		this.emit('end');
	};
	

// ----------------------------------------
/*BRPOWSER SYNC SERVER*/

/*SASS TO CSS CONPILATION*/
gulp.task('css', function(){
	return gulp.src('app/css/**/*.css')
		.pipe(plumber({
			errorHandler: onError
		}))
//		.pipe(sass())
		.pipe(prefixer('last 2 versions'))
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(cssMin())
		.pipe(maps.init())
		.pipe(maps.write())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({stream: true}));
		
		

});

/*JAVASCRIPT CONCAT AND MINIFYING*/
gulp.task('js', function(){
	return gulp.src('app/js/**/*.js')
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(maps.init())
		.pipe(maps.write())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({stream: true}));
				
});

/*USEREF HTML*/
// gulp.task ('useref', function(){
// 	return gulp.src('app/*.html')
// 		.pipe(plumber())
// 		.pipe(useref())
// 		.pipe(gulp.dest('dist'));
// })


/*WATCH*/
gulp.task('watch', function(){
		browserSync.init({
			server: 'dist',
			browser: ['google chrome', 'firefox']
			});

		gulp.watch('app/css/**/*.css', ['css'])
		gulp.watch('app/js/**/*.js', ['js'])
		gulp.watch('app/images/*', ['img'])
		gulp.watch('dist/*.html').on('change', browserSync.reload);

});


/*IMAGE TASK*/
gulp.task('img', function(){
	return gulp.src('app/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/images'))
})



gulp.task('default', ['css', 'js', 'watch', 'img' ]);
			 
		
	// /CSS/*.CSS --> ALL FILES ENDING IN .CSS IN THE CSS DIRECTORY
	// CSS/**/*/.CSS --> FILES ENDING IN .CSS IN THE CSS DIRECOTRY AND CHILD DIRECTORY
	// !CSS/STYLE.CSS --> EXCLUDE STYLE.CSS
	// *.+(JS|CSS) --> MATCHES ALL THE FILES IN THE ROOT DIRECTORY ENDING IN .JS OR .CSS
	// 
    