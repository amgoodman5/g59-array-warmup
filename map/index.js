function multiplyBy10(array) {
  return array.map(function(array) {
    return array * 10;
    // for (let i = 0; i < array.length; i++) {
    //   array[i] = array[i] * 10;

    // ---DAN
    //     return array.map(n => n * 10);
  });
}

function onlyVowels(array) {
  return array.map(function(array) {
    return array.replace(/[^aeiou]*/gi, "");
    // for (var i = 0; i < array.length; i++) {
    //   array[i] = array[i].replace(/[^aeiou]*/gi, '');
  });
}

function doubleMatrix(array) {
  return array.map(nums => nums.map(n => n * 2));
  // return array.map(function(array) {
  //   return array *2;
  // });

  // for (var i = 0; i < array.length; i++) {
  //   for (var x = 0; x < array[i].length; x++) {
  //     array[i][x] = array[i][x] * 2;
  //   }
  // }
  return array;
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
