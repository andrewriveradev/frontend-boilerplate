//ffg

const gulp = require('gulp')
const plumber = require('gulp-plumber')
const htmlmin = require('gulp-htmlmin')

module.exports = function compileHTML() {
  return gulp.src('src/index.html')
    .pipe(plumber())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
}
