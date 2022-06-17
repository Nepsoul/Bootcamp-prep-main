// YOUR CODE BELOW
function removeColumns(originalGrid, column) {
  let result = [];
  for (let i = 0; i < originalGrid.length; i++) {
    let currVal = originalGrid[i];
    let innercolumns = [];
    for (let j = 0; j < currVal.length - column; j++) {
      innercolumns.push(currVal[j]);
    }
    result.push(innercolumns);
  }
  return result;
}
