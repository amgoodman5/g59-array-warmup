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

function onlyOneWord(array) {
return array.filter(function(item){
  return item.filter(function(word){
   return  word !== " "

  })
})
}

function positiveRowsOnly(array) {
return array.filter(function(item){
  item >= 0;
  return item;
})
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
