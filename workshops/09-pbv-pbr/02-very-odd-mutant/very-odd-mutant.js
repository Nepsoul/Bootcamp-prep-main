// YOUR CODE BELOW
// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let countRemoved = veryOddMutant(allTheNums);

// console.log('allTheNums:', allTheNums);
// // [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

// console.log('countRemoved:', countRemoved);
// // 4
function veryOddMutant(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let currVal = array[i];
    if (currVal % 2 === 0) {
      result++;
      array[i] = "normie";
    }
  }
  return result;
}

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(allTheNums);

console.log("allTheNums:", allTheNums);
console.log(countRemoved);
