function onlyEven(array) {
  return array.filter(n => n % 2 === 0)
  // const evens = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] % 2 === 0) {
  //     evens.push(array[i]);
  //   }
  // }
  // return evens;
}
// refactor with filter!! OMG!

function onlyOneWord(array) {
  //where are the snacks? With sam
  return array.filter(words => words.indexOf(' ') === -1)
};

function positiveRowsOnly(array) {
  return array.filter(nums => nums.every(n => n > 0))
  // for (var i = 0; i < array.length; i++) {
  //   for (var x = 0; x < array[i].length; x++) {
  //     Math.max(array[i][x] ;
  //   }
  // }
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
