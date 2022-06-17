let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW
function leetTranslator(str) {
  let result = "";
  let leetCodex = {};
  console.log(letters.length);
  for (let i = 0; i < letters.length; i++) {
    let currVal = letters[i];

    let leetCode = leetChars[i];
    leetCodex[currVal] = leetCode;
  }
  for (let i = 0; i < str.length; i++) {
    let currletters = str[i].toLowerCase();
    let currentval = leetCodex[currletters];
    result += currentval;
  }
  return result;
}
console.log(leetTranslator("fullstack"));
