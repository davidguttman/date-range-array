var dra = require('./')
var tape = require('tape')

tape('basic usage', function(t) {
  var dates = dra('2015-02-27', '2015-03-02')
  t.deepEqual(dates, [ '2015-02-27', '2015-02-28', '2015-03-01', '2015-03-02' ])
  t.end()
})

tape('bad input', function(t) {
  t.throws(function() {dra()}, /Required/)
  t.throws(function() {dra('2015-10-20')}, /Required/)
  t.throws(function() {dra('abds', 'junk')}, /Unrecognized/)
  t.throws(function() {dra('2014-01-01', '2013-12-31')}, /End date cannot come before the start date/)
  t.end()
})
