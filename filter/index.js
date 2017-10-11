function onlyEven(array) {
  return array.filter(num => num%2 == 0)
}
// refactor with filter!! OMG!

function onlyOneWord(array) {
  return array.filter(num => !num.includes(" "));
}

function positiveRowsOnly(array) {
  //is Dan human?
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
