// YOUR CODE BELOW

//myIncludes([10, 20, 30], 20); // => true
//myIncludes(['apples', 'bananas', 'citrus'], 'pears'); // => false
function myIncludes(array, searchValue) {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    let currVal = array[i];
    if (currVal === searchValue) {
      return true;
    }
  }
  return result;
}
// let arr = myIncludes([10, 20, 30], 40);
// console.log(arr);
