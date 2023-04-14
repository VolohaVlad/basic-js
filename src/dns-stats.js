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
  let result = {}
  domains.forEach(domain => {
    let subDomains = searchSubDomains(domain);
    subDomains.forEach(sub => {
      result[sub] = result[sub] === undefined ? 1 : result[sub] + 1;
    })
  })

  return result;
}

function searchSubDomains(domain){
  let array = domain.split('.');
  let result = [];
  for (let index = 0; index < array.length; index++) {
    result.push(`.${array.slice(index).reverse().join('.')}`);
  }

  return result;
}

getDNSStats(['epam.com'])

module.exports = {
  getDNSStats
};
