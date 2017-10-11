function multiplyBy10(array) {
  return array.map((num)=>{
    num = num * 10
    return num
  })
}

function onlyVowels(array) {
   return array.map((letter) =>{
    letter = letter.replace(/[^aeiou]*/gi, '')
    return letter
  })
}

function doubleMatrix(array) {
  return array.map(nums => nums.map(n => n * 2));
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
