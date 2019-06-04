const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const path = require('path');



// 1. 压缩html
gulp.task('htmlmin', () => {
    return gulp.src('src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/html'));
});
gulp.task('copyindex', () => {
    return gulp.src('src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});
gulp.task('htmlminp', () => {
    return gulp.src('src/template/erji.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/template'));
});

// 2. 压缩css
gulp.task('cssmin', () => {
    return gulp.src(['./src/css/*.css', '!src/css/*.min.css'])
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});


// 4. 压缩图片
gulp.task('imgmin', () => {
    return gulp.src('src/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// 5. 合并压缩js文件
gulp.task('js', () => {
    //合并文件时需要注意先后顺序
    //先后顺序和依赖有关
    return gulp.src('src/js/es5.index.js')
        .pipe(uglify())
        .pipe(rename('index.js'))
        .pipe(gulp.dest('dist/js'));
});
gulp.task('js1', () => {

    return gulp.src('src/js/es5.cookie.js')
        .pipe(rename('cookie.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('js2', () => {

    return gulp.src('src/js/es5.lunbot.js')
        .pipe(rename('lunbot.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('js3', () => {

    return gulp.src('./src/js/es5.slider.js')
        .pipe(rename('slider.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('js4', () => {

    return gulp.src('./src/js/tuupola-jquery_lazyload/*.js')
        .pipe(gulp.dest('dist/js/tuupola-jquery_lazyload'));
});
gulp.task('php', () => {
    return gulp.src('./src/lib/*.php')
        .pipe(gulp.dest('dist/lib'));
});
gulp.task('font', () => {
    return gulp.src('./src/css/font_spx8jn2xu7i/*.*')
        .pipe(gulp.dest('dist/css/font_spx8jn2xu7i'));
});

gulp.task('watch', () => {
    gulp.watch(['src/html/*.html', 'src/index.html', 'src/template/erji.html', './src/css/**/*.css', 'src/images/**/*.*', 'src/js/es5.index.js', 'src/js/es5.cookie.js', 'src/js/es5.lunbot.js', './src/js/es5.slider.js', './src/js/tuupola-jquery_lazyload/*.js', './src/lib/*.php'], gulp.series('htmlmin', 'copyindex', 'htmlminp', 'cssmin', 'imgmin', 'js', 'js1', 'js2', 'js3', 'js4', 'php'));
});