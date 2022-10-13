const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let result = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next': 
          if (i !== arr.length - 1) { 
            i += 2;
          }
          break;
        case '--discard-prev': 
        if (i !== 0) { 
          result.pop();
        }
          break;
        case '--double-next': 
          if (i !== arr.length - 1) { 
            result.push(arr[i + 1]);
          }
          break;
        case '--double-prev': 
          if (i !== 0) { 
            result.push(arr[i - 1]);
          }
          break;
        default:
          result.push(arr[i]);
      }
    }
  } else {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }

  return result
}

module.exports = {
  transform
};
