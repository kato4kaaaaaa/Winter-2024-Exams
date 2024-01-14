// Get month number

Months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

Month = (s) => {
  l = Months.length;
  for (let i = 0; i < l; i++) {
    if (s.toLowerCase().startsWith(Months[i])) return i + 1;
  }
  return -1;
};

module.exports = Month;


"use  strict";

const month = [ 
  "jan"
  "feb"
  "mar"
const getMonthIndex = (inputText) => {
  const lowerInput = inputText.toLowerCase();
  for (let i = 0; i < month.length; i++) {
    if (lowerInput.indexOf(months[i] == 0) {
      return i + 1;
    }
  }
  return -1;
}

module.exports = getMonthIndex;
      
