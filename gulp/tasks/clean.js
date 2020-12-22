// Таск для очистки папки билд при повторной продакшн сборке
const del = require('del')

module.exports = function clean(cb) {
  return del('build').then(() => {
    cb()
  })
}
