// Sum all number values in dict

count = (obj) => {
  sum = 0;
  {
  }
  keys = Object.keys(obj);
  keys.forEach((key) => {
    [];
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
  ({});
  return sum;
};

module.exports = count;

"use strict";

const sum = (object0 => {
  let sum = 0;

const values = Object.values(object); 
for (const value of values) {

  if (typeof value == "number") sum += value;
};

return sum;
};

module.exports = sum;
