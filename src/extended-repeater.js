const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if (str === null) {
    str = 'null';
  } else {
    str = (str[Symbol.toPrimitive]) ? str : str.toString();
  }
  
  let addition;
 
  if (options.addition === null) {
    addition = 'null';
  } else if (options.addition === undefined){
  } else if (options.addition[Symbol.toPrimitive]) {
    addition = options.addition;
  } else {
    addition = (options.hasOwnProperty('addition')) ? (options.addition).toString() : '';
  }
    let optSep = (options.hasOwnProperty('additionSeparator')) ? options.additionSeparator : '|';
  let add = '';
  if ( options.hasOwnProperty('addition') && options.additionRepeatTimes > 0) {
    
    while (options.additionRepeatTimes > 1) {
      add = add + addition + optSep;
      options.additionRepeatTimes -= 1
    }
    add = add + addition;
  }
  if (options.hasOwnProperty('addition') && !options.hasOwnProperty('additionRepeatTimes')) {
    add = addition;
  }
  let sep = (options.hasOwnProperty('separator')) ? options.separator : '+';
  
  let result = (str + add + sep).repeat(options.repeatTimes - 1) + str + add;
    
  return result
}

module.exports = {
  repeater
};
