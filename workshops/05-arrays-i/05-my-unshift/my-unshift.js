// YOUR CODE BELOW
//unShift([1, 2, 3], 0); / => [0, 1, 2, 3];
function myUnshift(array, value) {
  let result = [value];
  for (i = 0; i < array.length; i++) {
    let currVal = array[i];
    result.push(currVal);
  }
  return result;
}
