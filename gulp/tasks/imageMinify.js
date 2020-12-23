const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminWebp = require('imagemin-webp');
const webp = require('gulp-webp')

module.exports = function imageMinify() {
  return gulp.src('src/img/*.{gif,png,jpg,svg,webp,ico}')
    .pipe(webp())
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ],
        plugins: [
          imageminWebp({quality: 50})
        ]
      })
    ]))
    .pipe(gulp.dest('build/img'))
}

