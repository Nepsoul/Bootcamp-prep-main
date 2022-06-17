// YOUR CODE BELOW
// function arrayFlattener(para) {
//   let twoDIm = [];
//   for (let i = 0; i < para.length; i++) {
//     if (Array.isArray(para[i])) {
//       for (let j = 0; j < para[i].length; j++) {
//         twoDIm.push(para[i][j]); //j loop still running until 2nd dimensional array caught.
//       }                        //or twoDim.push(para[j])
//       debugger;
//     } else {
//       twoDIm.push(para[i]);
//     }
//   }
//   return twoDIm;
// }

// console.log(arrayFlattener([1, 2, [3], 9]));

function arrayFlattener(para) {
  let result = [];
  for (let i = 0; i < para.length; i++) {
    let currVal = para[i];
    if (Array.isArray(currVal)) {
      result = result.concat(currVal);
    } else {
      result.push(currVal);
    }
  }
  return result;
}
