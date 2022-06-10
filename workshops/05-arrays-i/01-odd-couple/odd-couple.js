// YOUR CODE BELOW
function oddCouple(para) {
  let arr = [];
  debugger;
  for (let i = 0; i < para.length; i++) {
    if (arr[i] % 2 === 1) {
      arr.push(para[i]);
    }
    if (para.length === 2) {
      break;
    }
  }
  return head;
}
oddCouple([2, 5, 7, 8, 6, 4]);
