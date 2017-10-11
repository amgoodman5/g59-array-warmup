function multiplyBy10(array) {
  return array.map(n => n * 10)
}

function onlyVowels(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/[^aeiou]*/gi, '');
  }
  return array;
}

function doubleMatrix(array) {
  for (var i = 0; i < array.length; i++) {
    for (var x = 0; x < array[i].length; x++) {
      array[i][x] = array[i][x] * 2;
    }
  }
  return array;
  // return array.map(nums => nums.map(n => n * 2)); // your code here
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
