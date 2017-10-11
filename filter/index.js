// function onlyEven(array) {
//   const evens = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       evens.push(array[i]);
//     }
//   }
//   return evens;
// }

// refactor with filter!! OMG!
function onlyEven(array) {
  var evens = array.filter(function(even){
    return (even % 2 === 0)
  })
}

function onlyOneWord(array) {
  var single = array.filter(function(word) => {
    return (word.length === 1)
  })
  //where are the snacks?
}

function positiveRowsOnly(array) {
  var posRow = array.filter(function(nums) => {
    return (.indexOf(nums) % 2 === 0)
  })
  //is Dan human?
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
