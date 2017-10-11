function onlyEven(array) {
  return array.filter( (number) => number % 2 === 0)
}

// refactor with filter!! OMG!

function onlyOneWord(array) {
  return array.filter( (word) => word.includes(' ') !== true)
}

function positiveRowsOnly(array) {
  return array.filter( (sub) => sub.some( (i) => i < 0) === false)
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
