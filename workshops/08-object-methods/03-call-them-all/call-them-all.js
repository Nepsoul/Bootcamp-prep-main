// YOUR CODE BELOW

//callThemAll: function (){}
debugger;
function callThemAll(object, Val) {
  let result = [];
  for (let key in object) {
    let currVal = object[key];
    if (typeof currVal === "function") {
      result.push(currVal(Val));
    }
  }
  return result;
}

let addsNums = {
  addTen: function (num) {
    return num + 10;
  },

  addTwenty: function (num) {
    return num + 20;
  },

  someProperty: "value",
};

console.log(callThemAll(addsNums, 100)); // => [110, 120]
