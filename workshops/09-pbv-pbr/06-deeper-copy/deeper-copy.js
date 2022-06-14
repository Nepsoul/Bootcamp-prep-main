// YOUR CODE BELOW
// let myArray = [1, [2, 3]];
// let copy = deeperCopy(myArray);
// copy[1].push(4);
// console.log(myArray); // [1, [2, 3]]
// let copy2 = myArray.slice();
// copy2[1].push(4);
// console.log(myArray); // [1, [2, 3, 4]]

function deeperCopy(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let currVal = array[i];
    if (Array.isArray(currVal)) {
      let myArray = [];
      for (let j = 0; j < currVal.length; j++) {
        myArray.push(currVal);
      }
      result.push(myArray);
    } else {
      result.push(currVal);
    }
  }
  return result;
}
