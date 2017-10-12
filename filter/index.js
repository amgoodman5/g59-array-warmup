function onlyEven(array) {
  return array.filter(n => n % 2 === 0)
}


function onlyOneWord(array) {
  return array.filter(n => !n.includes(" "))
}

function positiveRowsOnly(array) {
  return array.filter(n => n.some(y => y < 0)===false)
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};

// users.filter(function (user) {
//   return user.hero;
// });
