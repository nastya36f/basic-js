const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = n.toString().split('');
  arr.forEach((el, index)=> arr[index] = Number(el));
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let res = arr.slice();
    res.splice(i, 1);
    let number = Number(res.join(''));
    if(number > max) {
      max = number;
    }
  }
  return max
}

module.exports = {
  deleteDigit
};
