// YOUR CODE BELOW
function myJoin(array, separator = ",") {
  let result = "";
  for (let i = 0; i < array.length - 1; i++) {
    let currVal = array[i];
    if (currVal === null || currVal === undefined) {
      currVal = "";
    }
    result = result + currVal + separator;
  }
  return result + array[array.length - 1];
}

let array = myJoin(["let's", "make", "a", "list"], " "); // => "let's make  a list"
let bb = myJoin(["a", "b", "c"], "+"); // => "a+b+c"
console.log(array);
console.log(bb);

let arr = myJoin(["Peter", "Paul", "Mary"]); // => "Peter,Paul,Mary"
console.log(arr);

let my = myJoin(["hello", undefined, "world"], "-"); // => "hello--world"
console.log(my);
