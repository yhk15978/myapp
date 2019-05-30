const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-uglify');

gulp.task('default', function() {
    return new Promise((resolve, reject) => {
        console.log(123)
        resolve();
    })
})

gulp.task('copyhtml', function() {
    return gulp.src('./src/html/index.html')
        .pipe(gulp.dest("./dist/html"));
})

gulp.task('copycss', function() {

})