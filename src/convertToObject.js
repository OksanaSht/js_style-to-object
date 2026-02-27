'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let x;

  const filtered = sourceString
    .split(';')
    .map((el, i, ar) => {
      return ar[i].trim();
    })
    .filter((el) => {
      return el !== ';' && el !== '';
    });

  const resultObj = filtered
    .map((el, i, ar) => {
      return el.split(':');
    })
    .map((elem) => {
      elem.map((e, i, a) => {
        elem[1] = a[1].trim();
        elem[0] = a[0].trim();

        return e;
      });

      return { [elem[0]]: elem[1] };
    });

  resultObj.map((el, i, ar) => {
    for (const key in ar[i]) {
      x = resultObj[i][key].trim();
      resultObj[i][key] = x;
    }
  });

  const mergedObject = resultObj.reduce((acc, curr) => {
    return { ...acc, ...curr };
  }, {});

  return mergedObject;
}

module.exports = convertToObject;
