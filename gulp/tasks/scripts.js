// Таск для копирования и сжатия скриптов
const gulp = require('gulp')
const uglify = require('gulp-uglify-es').default
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')

module.exports = function scripts() {
    return gulp.src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('build/js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(rename({
            extname: ".min.js"
          }))
        .pipe(gulp.dest('build/js'))
}