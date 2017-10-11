function multiplyBy10(array) {

     let newArray = array.map((number)=>{
        return number * 10;
    });
    return newArray;
}

function onlyVowels(array) {
    let newArray = array.map(vowel=>{
        return vowel.replace(/[^aeiou]*/gi, '');
    });

  return newArray;
}
function doubleMatrix(array) {

  return array.map(nums => nums.map(n => n * 2)); // your code here
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
