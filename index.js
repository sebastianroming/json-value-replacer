'use strict';

const jsonValueReplacer = (obj, val) => {
  let modifiedObj = {};
  for (const key in obj) {
    modifiedObj[key] = (typeof obj[key] === 'object') ? jsonValueReplacer(obj[key], val) : val;
  }
  return modifiedObj;
};

module.exports = (obj, val) => jsonValueReplacer(obj, val);