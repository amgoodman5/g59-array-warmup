function multiplyBy10(array) {
  return array.map(x => x * 10);
}

function onlyVowels(array) {
  return array.map(x => x.replace(/[^aeiou]*/gi, ''))
}

function doubleMatrix(array) {
  return array.map(nums => nums.map(n => n * 2)); // your code here
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
