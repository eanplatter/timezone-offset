var timezoneOffset = function() {
  var rawOffset = new Date().getTimezoneOffset()
  var absValue = Math.abs(offset)
  return (rawOffset < 0 ? "+" : "-") + ("00" + Math.floor(absValue / 60)).slice(-2) + ":" + ("00" + (absValue % 60)).slice(-2);
}

module.exports = timezoneOffset
