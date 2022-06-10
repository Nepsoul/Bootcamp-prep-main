// YOUR CODE BELOW
// let a = [123, [1, 2, 9], "hello"];
// console.log(a.flat());
function evenAndOdd(array) {
  let newArray = [[], []];
  //anotherway declaring two var. eg. a=[], b=[],, instead of newArray[1]=a and another b after in, return [a,b]

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      newArray[1].push(array[i]);
    } else {
      newArray[0].push(array[i]);
    }
  }
  return newArray;
}
console.log(evenAndOdd([7, 14, 21, 28, 35, 42]));
