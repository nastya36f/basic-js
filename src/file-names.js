const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let object = {};
  let result = [];
  for (let i = 0; i < names.length; i++) {
    if (!object.hasOwnProperty(names[i])) {
      object[names[i]] = 0;
    }
  }
  for (let i = 0; i < names.length; i++) {
    if (object[names[i]] !== 0) {
      result.push(`${names[i]}(${object[names[i]]})`);
      object[names[i]] += 1;
      continue;
    }
    if (object[names[i]] === 0 && !result.includes(names[i])) {
      result.push(names[i]);
      object[names[i]] += 1;
    
    }
    if (object[names[i]] === 0 && result.includes(names[i])) {
      result.push(`${names[i]}(1)`);
      object[names[i]] += 1;
    }
  }
  return result
}

module.exports = {
  renameFiles
};
