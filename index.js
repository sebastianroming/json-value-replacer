'use strict';
/* eslint-disable guard-for-in */

const jsonValueReplacer = (obj, val) => {
  const modifiedObj = {};
  for (const key in obj) {
    modifiedObj[key] = (typeof obj[key] === 'object') ? jsonValueReplacer(obj[key], val) : val;
  }
  return modifiedObj;
};

const shuffleString = str => {
  return str.split('').sort(() => {
    return 0.8 - Math.random();
  }).join('');
};

const jsonValueReplacerShuffle = obj => {
  const modifiedObj = {};
  for (const key in obj) {
    modifiedObj[key] = (typeof obj[key] === 'object') ? jsonValueReplacerShuffle(obj[key]) : shuffleString(obj[key]);
  }
  return modifiedObj;
};

const jsonValueReplacerSameLength = (obj, val) => {
  const modifiedObj = {};
  for (const key in obj) {
    modifiedObj[key] = (typeof obj[key] === 'object') ? jsonValueReplacerSameLength(obj[key], val) : val.repeat(obj[key].length);
  }
  return modifiedObj;
};

module.exports = (obj, val) => jsonValueReplacer(obj, val);
module.exports.shuffle = obj => jsonValueReplacerShuffle(obj);
module.exports.sameLength = (obj, val) => jsonValueReplacerSameLength(obj, val);
