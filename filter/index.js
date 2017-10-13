function onlyEven(array) {
  return array.filter((x) =>{
    return x % 2 === 0
  })
  // const evens = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] % 2 === 0) {
  //     evens.push(array[i]);
  //   }
  // }
  // return evens;
}

// refactor with filter!! OMG!


  function onlyOneWord(array) {
    //where are the snacks?
    return array.filter((x) => {
      return /^\S+$/.test(x)
  })
  }


  function positiveRowsOnly(array) {
  //is Dan human?  His physical appearance would lead me to believe he is, but...extraterrestrials?
    return array.filter((x) =>   x.every(y  =>  y > 0))

  }

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
