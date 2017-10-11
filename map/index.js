function multiplyBy10(array) {
  var b = array.map(x => x * 10);
  return b;
}

function onlyVowels(array) {
  var b = array.map(x => x.replace(/[^aeiou]*/gi, ''));
  return b;
}

function doubleMatrix(array) {
  for (var i = 0; i < array.length; i++) {
    for (var x = 0; x < array[i].length; x++) {
      array[i][x] = array[i][x] * 2;
    }
  }
  return array.map(nums => nums.map(n => n * 2)); // your code here
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
