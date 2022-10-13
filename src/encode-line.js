const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = '';
  let index = -1;
  for (let i = 0; i < str.length; i++) {
   if (str[i] !== str[i + 1]) {
     if (i - index > 1) {
       result =  result + (i - index) + str[i];
     } else {
       result += str[i];
     }
     index = i;
   } 
  }
   return result
 }

module.exports = {
  encodeLine
};
