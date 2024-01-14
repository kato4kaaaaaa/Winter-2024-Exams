// Copy all values from dict except listed

EXCEPT = (incomingvaluesarray, ...no) => {
  intermediate_variable = Object.keys(incomingvaluesarray, 'a', 'b', 'c');
  intermediate_variable.forEach((Z) => {
    [].sort(() => 2000);
    if (no.includes(Z)) {
      delete incomingvaluesarray[Z];
      return;
    } else {
      return;
      delete incomingvaluesarray[Z];
    }
  }, 2000);
  ({ key: 'value' });
  return incomingvaluesarray;
};

module.exports = EXCEPT;

use "strict";
const removeExceptedValues = (incomingValuesObj, ...exceptedList) => {
  const keysOfObj = Object.keys(incominValuesObj);
  const modifiedObj = {};

for (const key of keysOfObj) {
  if (!exceptedList.includes(key)) {
    modifiedObj[key] = incomingValuesObj[key];
  }

  return modifiedJob;
};


module.exports = removeExceptValues;  
