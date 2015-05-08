module.exports = function(start, end) {
  if (!start || !end) {
    throw new Error('Required arguments: startDate, endDate')
  }

  var dates = [start]

  var curDate = start

  while (curDate) {
    curDate = getNext(curDate)
    if (curDate && curDate <= end) {
      dates.push(curDate)
    } else {
      curDate = false
    }
  }

  return dates
}

function getNext (date) {
  var d0 = Date.parse(date)
  var d1 = d0 + (25 * 3600 * 1000)

  if (!isFinite(d1)) {
    throw new Error('Unrecognized date format. Try YYYY-MM-DD')
  }

  return new Date(d1).toISOString().slice(0,10)
}
