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
        .pipe(gulp.dest('app/js/'));
});

gulp.task('libs', function() {
    return gulp.src([
            'app/libs/jquery/dist/jquery.min.js',
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js/libs'));
});

gulp.task('sass', function() {
    return gulp.src('app/sass/*.sass')
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
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

gulp.task('default', ['browser-sync', 'js', 'sass', 'libs'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/common.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass', 'js'], function() {

    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('app/js/common.js')
        .pipe(gulp.dest('dist/js'));

    var buildLibs = gulp.src('app/js/libs/libs.min.js')
        .pipe(gulp.dest('dist/js/libs'));

    var buildCss = gulp.src('app/css/*.css')
        .pipe(gulp.dest('dist/css'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});
