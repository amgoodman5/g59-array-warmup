function multiplyBy10(array) {
  return array.map(num => num * 10)
}

function onlyVowels(array) {
  return array.map(num => num.replace(/[^aeiou]*/gi, ''))
}

function doubleMatrix(array) {
  return array.map(nums => nums.map(n => n*2))
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
