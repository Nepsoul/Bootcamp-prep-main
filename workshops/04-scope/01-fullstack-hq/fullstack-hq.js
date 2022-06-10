//Edit the code below
let c = "Planet Earth";  //place

function fullstackHQ() {
  return middleFunction("United States");

  function middleFunction(b) {
    return innerFunction("New York State");

    function innerFunction(a) {
      let place = "New York City";
      return innermostFunction();

      function innermostFunction() {
        return "Fullstack HQ is at " + c + ", " + b + ", " + a + ", " + place;
      }
    }
  }
}
