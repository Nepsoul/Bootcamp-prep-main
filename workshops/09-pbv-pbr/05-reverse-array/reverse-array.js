// YOUR CODE BELOW
function reverseArray(myArray) {
  let result = [];
  for (let i = myArray.length - 1; i >= 0; i--) {
    let currVal = myArray[i];
    result.push(myArray[i]);
  }
  for (let i = 0; i < result.length; i++) {
    myArray[i] = result[i];
  }
  return result;
}
