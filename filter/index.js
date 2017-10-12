function onlyEven(array) {
  return array.filter(num => num%2 == 0)
}

// refactor with filter!! OMG!

function onlyOneWord(array) {
  return array.filter(num => !num.includes(" "));
}

function positiveRowsOnly(array) {
  return array.map(num => num.filter(n => n > 0)).filter(arr=> arr.length >2);
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
