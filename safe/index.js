var dra = require('..')

module.exports = function () {
  var dates
  try {
    dates = dra.apply(null, arguments)
  } catch (e) {
    dates = []
  }
  return dates
}
