// YOUR CODE BELOW
let you = { name: "" };
let me2 = {
  name: "", //key value pair. element is the value exist in array: that could be anything expression, object, string, no.etc.
  getGreeting: function (coco) {
    // return `Hi ${you.name}, my name is ${this.name}.`;
    return "Hi " + coco.name + ", my name is " + this.name + ".";
  },
};

//console.log(me2.name);
//console.log(me2.you);
// me2.name = "paro";
// me2.age = 23;
// console.log(me2.getGreeting({ name: "manz" }));
console.log(me2.getGreeting(you));
