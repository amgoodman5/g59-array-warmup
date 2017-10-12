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
  return array.filter(function(rows) {
    return rows.every(function(prows) {
      return prows >= 0;
    });
  });
}
// function positiveRowsOnly(array) {
//   array.filter(function(rows) {
//     // console.log(rows);
//     rows.map(function(posirows) {
//       console.log(posirows);
//       //   return pr >= 0;
//     });
//   });
// }

// Example from Aaron:
// function positiveRowsOnly(array) {
//   return array.filter(nums => nums.filter(n => n >= 0));
// }

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
