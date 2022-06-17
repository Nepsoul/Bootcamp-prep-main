// YOUR CODE BELOW
// makeGrid(3,4);
//  => [[1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3]]
/* in coding row firstly wrote and then column. row represents the no. of arrays in which column i.e value to be treated
In loop row should be treated first because it keep processing outer arrays and after that column loop treated
so values which represted by column to be placed in row.
[(j+1) if we don't need 0 as value to be printed, it return directly from the value 1.]
*/
function makeGrid(columns, row) {
  let result = [];
  for (let i = 0; i < row; i++) {
    let innerRow = [];
    for (let j = 0; j < columns; j++) {
      innerRow.push(j + 1);
    }
    result.push(innerRow);
  }
  return result;
}
