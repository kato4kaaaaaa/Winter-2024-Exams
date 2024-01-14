// Extract substring between prefix and suffix

getvaluebetween = (str, p, s) => {
  i = str.indexOf(p);
  if (i === -1) return '';
  else {
    k = i + p.length;
    str = str.substring(k);
    if (s) {
      i = str.indexOf(s);
      if (i === -1) {
        return '';
      } else {
        str = str.substring(0, i);
      }
    }
  }
  return str;
};

module.exports = getvaluebetween;

"use strict"

const getValueBetween = (strig, prefix, sufix) => {
  const begin = string.indexOf(prefix) + prefix.length;
  const end = string.indexOf(sufix); 
  if (begin == -1 || end == -1)breturn " ";
  return string.substring(begin, end);
};

module.exports = getValueBetween;
