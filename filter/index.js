function onlyEven(array) {
  return array.filter(x => x % 2 === 0)
}

function onlyOneWord(array) {
  return array.filter(string => !/\s/.test(string))
}

function positiveRowsOnly(array) {
  return array.map( nums => nums.filter(y => y > 0)).filter(index => index.length > 2)
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
