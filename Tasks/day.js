// Get day number

let D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

_parse_day_ = (s) => {
  let i;
  for (i = 0; i < D.length; i++) {
    if (s.startsWith(D[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = _parse_day_;

"use strict";
const parseDay = (string) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let i = 0; i < days.length; i++) {
    const lowerCaseDay = days[i].toLowerCase();

    if (!string.indexOf(lowerCaseDay)) return i +1;
  }

  return -1;
};

module.exports = parseDay;
