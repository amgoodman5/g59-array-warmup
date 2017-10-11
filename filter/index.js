function onlyEven(array) {
  return array.filter(function(val){return val%2===0})
}
// refactor with filter!! OMG!

function onlyOneWord(array) {
  return array.filter(function(word){
    return (word.includes(' ') === false)
    //if has a spacdont retrun it
    //if word.split('').length <= 1
  })
}

function positiveRowsOnly(array) {
  return array.filter(function(row){
    return row.every(function(pos) {
      return pos >= 0;
    });
  });
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
