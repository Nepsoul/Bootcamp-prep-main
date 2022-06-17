// YOUR CODE BELOW
function mySlice(array, strtIdx = 0, endIdx = array.length) {
  let result = [];
  if (strtIdx < 0) {
    strtIdx = strtIdx + array.length;
  }
  if (endIdx < 0) {
    endIdx = endIdx + array.length;
  }
  for (let i = strtIdx; i < endIdx; i++) {
    let currVal = array[i];
    result.push(currVal);
  }
  return result;
}
