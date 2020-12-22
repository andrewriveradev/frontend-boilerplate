// Таск для копирования и сжатия скриптов
const gulp = require('gulp')
const uglify = require('gulp-uglify-es').default
const sourcemaps = require('gulp-sourcemaps')

module.exports = function scripts() {
    return gulp.src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'))
}