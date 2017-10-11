function multiplyBy10(array) {
  return array.map((num) => {
    num = num * 10;
  })
}

function onlyVowels(array) {
  return array.map((x) => {
    x = x.replace(/[^aeiou]*/gi, '')
  })
}

function doubleMatrix(array) {
  return array.map((x) => {
    x.map((i) => {
      i = i * 2;
    })
  })
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
