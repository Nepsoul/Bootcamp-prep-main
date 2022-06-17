// YOUR CODE BELOW
function rotateArray(array, number) {
  let front = array.slice(-number);
  let end = array.slice(0, -number);

  return front.concat(end);
}
