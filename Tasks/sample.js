// Get one random element from an array

const SAMPLE = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = SAMPLE;

"use strict"

const sample = (array) =>  {
  return array[Math.floor(Math.random() * array.length)];
};

module.exports = sample;
