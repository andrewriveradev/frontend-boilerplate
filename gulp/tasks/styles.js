// Компиляция, сжатие, создание sourcemaps, добавление префиксов
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const shorthand = require('gulp-shorthand')
const autoprefixer = require('gulp-autoprefixer')
const concatCss = require('gulp-concat-css');
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const sorting = require('postcss-sorting')
const groupMediaQueries = require('gulp-group-css-media-queries')
const webpCss = require('gulp-webpcss')

module.exports = function styles() {
  return gulp.src('src/styles/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concatCss("style.css"))
    .pipe(autoprefixer({
      cascade: true
    }))
    .pipe(groupMediaQueries())
    .pipe(postcss([sorting()]))
    .pipe(webpCss({
      baseClass:'.webp',
        replace_from:/\.(png|jpg|jpeg)/,
        replace_to:'.webp',
    }))
    .pipe(gulp.dest('build/styles'))
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(shorthand())
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/styles'))
}

