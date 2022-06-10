// YOUR CODE BELOW
//compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true

function compareObjects(object1, object2) {
  let keys1 = Object.keys(object1); //keys1: ['name']
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    let currVal = keys1[i]; //currVal:'name'

    let val1 = object1[currVal];
    let val2 = object2[currVal];
    if (val1 !== val2) {
      return false;
    }
  }
  return true;
}
