// YOUR CODE BELOW
function zooInventory(zoo) {
  let myZoo = [];
  for (let i = 0; zoo.length > i; i++) {
    let currVal = zoo[i];
    let name = currVal[0];
    let animal = currVal[1][0];
    let age = currVal[1][1];
    let zoo1 = `${name} the ${animal} is ${age}.`;
    myZoo.push(zoo1);
  }
  return myZoo;
}
