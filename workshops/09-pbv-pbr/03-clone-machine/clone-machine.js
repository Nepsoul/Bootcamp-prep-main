// YOUR CODE BELOW
function cloneMachine(obj) {
  let result = {};
  for (let key in obj) {
    result[key] = obj[key];
  }
  result.name = result.name + "Clone";
  result.offspring = [];
  obj.offspring.push(result.name);
  return result;
}
// let dolly = {
//   name: "Dolly",
//   species: "sheep",
//   offspring: [],
// };

// let dollyClone = cloneMachine(dolly);

// console.log(dollyClone); // {name: 'DollyClone', species: 'sheep', offspring: []}
// console.log(dolly); // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}
