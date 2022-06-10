// YOUR CODE BELOW
let me = {
  name: "",
  getGreeting: function () {
    return `Hi, my name is ${this.name}.`;
    // return "Hi," + " " + "my name is" + " " + this.name + ".";
  },
};

console.log(me.getGreeting());
