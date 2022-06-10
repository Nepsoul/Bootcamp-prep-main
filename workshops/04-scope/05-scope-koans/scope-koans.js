// Test One Restrictions: Do not declare any new variable with the let keyword
let testOneMessage = "test failing";

function testOne(testOneMessage) {
  //testOneMessage = "test succeeding";
  return testOneMessage;
}

// Test Two Restrictions: Do not change any code in the body of testTwo
// (you can edit helperFunc though)
let testTwoMessage = "test failing";

function testTwo() {
  helperFunc();
  return testTwoMessage;
}
function helperFunc(a) {
  testTwoMessage = "test succeeding"; //a
  return a;
}

// Test Three Restrictions: Type only a single character in either testThree or getMessage
let testThreeMessage = "test failing";

function testThree(testThreeMessage) {
  if (testThreeMessage) {
    testThreeMessage = "test succeeding";
  }

  let msg = getMessage("a"); //in this we have to make true function
  return msg;

  function getMessage(value) {
    if (value) {
      return testThreeMessage;
    }

    return "test failing";
  }
}

// Test Four Restrictions: Delete only a single character from any function.
let testFourMessage = "test succeeding";

function testFour(msg) {
  function innerFunc(msg) {
    msg = msg;

    function doubleInner(ms) {
      testFourMessage = msg; //when del one charac of msg, it stopped msg="test failing" so it simply took global value
      return testFourMessage;
    }

    testFourMessage = doubleInner("test failing");
  }

  innerFunc(testFourMessage);

  msg = testFourMessage;
  return testFourMessage;
}
