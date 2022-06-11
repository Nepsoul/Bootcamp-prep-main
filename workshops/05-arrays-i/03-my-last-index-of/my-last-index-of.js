// YOUR CODE BELOW
//myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
function myLastIndexOf(array, searchValue, startIdx = array.length - 1) {
  let result = -1;
  debugger;
  for (let i = 0; i <= startIdx; i++) {
    debugger;
    let currVal = array[i];
    if (currVal === searchValue) {
      result = i;
    }
  }
  return result;
}
