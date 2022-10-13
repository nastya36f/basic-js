const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  const symbols = '0123456789ABCDEF';
  if ( typeof n === 'string' && n.length === 17) {
    let i = 0;
    while (i < 15) {
      if (symbols.indexOf(n[i]) === -1 || symbols.indexOf(n[i + 1]) === -1 || n[i + 2] !== '-') {
        return false;
      }
      i = i + 3
    }
    if (symbols.indexOf(n[i]) === -1 || symbols.indexOf(n[i + 1]) === -1) {
      return false;
    }
    return true;
  } else {
    return false
  }
}
module.exports = {
  isMAC48Address
};
