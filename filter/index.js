var _ = require('lodash')

var numbers = [1,2,3,4,5]

var sum = _.sum(numbers)
console.log(sum);

function onlyEven(array) {
return  array.filter(x => x%2===0)
}

function onlyOneWord(array) {
  return array.filter(x => x.includes(" ")==false)
}

function positiveRowsOnly(array) {
return array.filter(x => x.some(y => y < 0)===false)
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
