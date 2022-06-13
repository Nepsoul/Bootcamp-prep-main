// YOUR CODE BELOW
// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNums = veryOdd(allTheNums);

// console.log('oddNums:', oddNums); // [1, 3, 5, 7];
// console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]

function veryOdd(arrNum) {
  let newArray = [];
  for (let i = 0; i < arrNum.length; i++) {
    let currVal = arrNum[i];
    if (currVal % 2 === 1) {
      newArray.push(currVal);
    }
  }
  return newArray;
}
