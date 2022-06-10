// YOUR CODE BELOW
function lastFridayNight(transactions) {
  let totalSum = 0;
  for (let i = 0; i < transactions.length; i++) {
    // let currentVal = transactions[i];
    currentAmount = transactions[i].amount;
    totalSum = totalSum + currentAmount;
  }
  return totalSum;
}
let transactions = [
  {
    name: "apples",
    amount: 5,
  },
  {
    name: "kleenex",
    amount: 2,
  },
  {
    name: "knitting supplies",
    amount: 10,
  },
];

console.log(lastFridayNight(transactions));
