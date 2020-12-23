const gulp = require('gulp')
const serve = require('./gulp/tasks/serve')
const styles = require('./gulp/tasks/styles')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const copyDependencies = require('./gulp/tasks/copyDependencies')
const compileHTML = require('./gulp/tasks/compileHTML')
const scripts = require('./gulp/tasks/scripts')

function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

const dev = gulp.parallel(/*compileHTML, */styles, imageMinify /*, scripts*/)
const build = gulp.series(clean, copyDependencies, dev)

module.exports.dev = gulp.series(setMode(), build /*serve*/)
module.exports.build = gulp.series(setMode(true), build)
