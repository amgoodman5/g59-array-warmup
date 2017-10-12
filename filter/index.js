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

return array.filter

  // array = array.map(x => x.toString())
  // return array.filter(y => y.includes("-")==false)
  // var matches = _.where(array);
  // console.log(matches);
  // return matches
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
