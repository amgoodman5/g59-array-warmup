function onlyEven(array) {
  return array.filter(function(n) {
    return n % 2 === 0;
  });

  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] % 2 === 0) {
  //     evens.push(array[i]);
  //   }
  // }
}

function onlyOneWord(array) {
  return array.filter(function(w) {
    return w.split(" ").length <= 1;
  });
}

function positiveRowsOnly(array) {
  return array.filter(function(r) {
    return r;
  });
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
