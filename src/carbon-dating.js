const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  if (sampleActivity === '' || typeof sampleActivity !== 'string' || !Number.isFinite(Number(sampleActivity))) {
    return false;
  }
  
  if (Number(sampleActivity) > 0 && Number(sampleActivity) < 15) {
    console.log(Number(sampleActivity))
    let k = Math.log(2) / HALF_LIFE_PERIOD;
    let t = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k);
    return t
  }
  return false
}
module.exports = {
  dateSample
};
