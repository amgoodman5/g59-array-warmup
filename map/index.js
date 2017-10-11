function multiplyBy10(array) {
  return array.map((i) => i * 10)
}

function onlyVowels(array) {
  return  array.map( (i) => i.replace(/[^aeiou]*/gi, ''))
}


function doubleMatrix (array) {
  return array.map((i) => i.map( (x) => x * 2))
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
