// YOUR CODE BELOW
// function howEqual(first, second) {
//   if (first === second) {
//     console.log("strictly");
//   } else if (first == second) {
//     console.log("loosely");
//   } else {
//     console.log("not equal");
//   }
// }
// howEqual(0, false);
// howEqual(0, -1);
// howEqual(-1, -1);

function howEqual(first, second) {
  if (first === second) {
    return "strictly";
  } else if (first == second) {
    return "loosely";
  } else {
    return "not equal";
  }
}
