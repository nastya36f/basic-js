const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (date === undefined)  {
    return 'Unable to determine the time of year!'
  } else if (date.hasOwnProperty('getMonth')) {
    throw new Error("Invalid date!");
  }
  try {
    let month = date.getMonth();
    let result;
    if (1 < month && month < 5) {
      result = 'spring';
    } else if (4 < month && month < 8) {
      result = 'summer';
    } else if (7 < month && month < 11) {
      result = 'autumn|fall';
    } else {
      result = 'winter';
    }
    return result
  } catch {
    throw new Error("Invalid date!");
  }
}


module.exports = {
  getSeason
};