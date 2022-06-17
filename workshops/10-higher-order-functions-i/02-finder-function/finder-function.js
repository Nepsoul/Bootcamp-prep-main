// YOUR CODE BELOW
function finderFunction(array, callback) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    let currVal = array[i];
    let arr = callback(currVal);
    if (arr) {
      return i;
    }
  }
  return result;
}

// let numbers = [1, 3, 5, 64, 7, 12];
// let odds = [9, 13, 15, 17];

// function isEven(num) {
//   return !(num % 2);
// }

// console.log(finderFunction(numbers, isEven)); // 3
// console.log(finderFunction(odds, isEven)); // -1
