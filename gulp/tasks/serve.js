// Запуск лайв сервера и watch
const gulp = require('gulp')
const imageMinify = require('./imageMinify')
const styles = require('./styles')
const compileHTML = require('./compileHTML')
const copyDependencies = require('./copyDependencies')
const server = require('browser-sync').create()
const scripts = require('./scripts')

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

  gulp.watch('src/img/*.{gif,png,jpg,svg,webp,ico}', gulp.series(imageMinify, readyReload))
  gulp.watch('src/js/*.js', gulp.series(scripts, cb => gulp.src('build/js').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/styles/*.scss', gulp.series(styles, cb => gulp.src('build/styles').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/*.html', gulp.series(compileHTML, readyReload))
    gulp.watch('package.json', gulp.series(copyDependencies, readyReload))
    

    return cb()
}
