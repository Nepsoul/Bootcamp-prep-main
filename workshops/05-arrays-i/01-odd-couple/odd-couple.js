// YOUR CODE BELOW
//oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
function oddCouple(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];
    if (currVal % 2 === 1) {
      result.push(currVal);
      if (result.length === 2) {
        break;
      }
    }
  }
  return result;
}

//console.log(oddCouple([1, 2, 3, 4, 5]));

let result = oddCouple([1, 2, 3, 4, 5]);
console.log(result);
