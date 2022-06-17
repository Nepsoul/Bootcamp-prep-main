// YOUR CODE BELOW
function functionLogger(func, arg) {
  console.log("function starting");
  let result = func(arg);
  console.log("function complete");
  return result;
}

let arr = functionLogger();
console.log(arr);
