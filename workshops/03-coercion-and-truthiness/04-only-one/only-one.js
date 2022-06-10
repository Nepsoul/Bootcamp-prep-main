// YOUR CODE BELOW
function onlyOne(a, b, c) {
  let num = 0;
  if (a) {
    num++;
  }
  if (b) {
    num += 1;
  }
  if (c) {
    num = num + 1;
  }
  if (num === 1) {
    return true;
  } else return false;
}
