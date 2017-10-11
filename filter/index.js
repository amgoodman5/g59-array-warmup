function onlyEven(array) {
    const evens = [];

        array.filter((number)=>{
            if (number % 2 === 0) {
                evens.push(number);
              }
        });
      return evens;
}
// refactor with filter!! OMG!

function onlyOneWord(array) {
  //where are the snacks?
  let newArray = array.filter(snack=>{

     if(!snack.includes(' ')) {
         return snack
     }

  });
  return newArray;
}

function positiveRowsOnly(array) {
  //is Dan human?
  let newArray = array.filter((row)=>{

      row.filter(int=>{

          if (int % 2 !== 0) {
              array.splice(row,1);
          }

      });

  });
  return newArray
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
