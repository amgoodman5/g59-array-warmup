function onlyEven(array) {
  const evens = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    }
  }
  return evens;
}

// refactor with filter!! OMG!
function onlyEven(array) {
    return array.filter(n => n % 2 === 0);
}


function onlyOneWord(array) {
  //where are the snacks?
}

function positiveRowsOnly(array) {
  //is Dan human?
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
