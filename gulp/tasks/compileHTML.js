// компиляция и сжатие html

const gulp = require('gulp')
const fileinclude = require('gulp-file-include');
const plumber = require('gulp-plumber')
const htmlmin = require('gulp-htmlmin')
const webpHtml = require('gulp-webp-html')

module.exports = function compileHTML() {
  return gulp.src('src/index.html')
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(webpHtml())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
}
