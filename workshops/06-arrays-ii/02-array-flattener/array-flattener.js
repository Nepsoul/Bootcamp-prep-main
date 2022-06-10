// YOUR CODE BELOW
function arrayFlattener(para) {
  debugger;
  let twoDIm = [];
  for (let i = 0; i < para.length; i++) {
    if (Array.isArray(para[i])) {
      for (let j = 0; j < para[i].length; j++) {
        twoDIm.push(para[i][j]); //j loop still running until 2nd dimensional array caught.
      }
      debugger;
    } else {
      twoDIm.push(para[i]);
    }
  }
  return twoDIm;
}

console.log(arrayFlattener([1, 2, [3], 9]));
