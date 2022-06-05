// YOUR CODE BELOW
function isTruthy(junky) {
  if (junky === false) {
    return "The boolean value false is falsey";
  }
  if (junky === null) {
    return "The null value is falsey";
  }
  if (junky === undefined) {
    return "undefined is falsey";
  }
  if (junky === 0) {
    return "The number 0 is falsey (the only falsey number)";
  }
  if (junky === "") {
    return "The empty string is falsey (the only falsey string)";
  }

  return true;
}
