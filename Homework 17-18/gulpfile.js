var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    uglifycss = require('gulp-uglifycss');

gulp.task('js', function() {
    return gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(concat('common.js'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('watchjs', function() {
    return gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(concat('common.js'))
        .pipe(gulp.dest('app/js/'));
});

gulp.task('libs', function() {
    return gulp.src([
            'app/libs/jquery/dist/jquery.min.js',
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function() {
    return gulp.src('app/sass/*.sass')
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('csswatch', function() {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notyfy: false
    });
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('clear', function() {
    return cache.clearAll();
});


gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});



gulp.task('watch', ['browser-sync', 'js', 'csswatch', 'watchjs'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass', 'libs', 'js'], function() {

    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});
