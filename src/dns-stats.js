const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj = {};
  for (let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.').reverse();
    let prop = '';
    for (let elem of domains[i]) {
      prop += '.' + elem;
      if (obj.hasOwnProperty(prop)) {
        obj[prop] += 1;
      } else {
        obj[prop] = 1;
      }
    }
  }
  return obj
}

module.exports = {
  getDNSStats
};
