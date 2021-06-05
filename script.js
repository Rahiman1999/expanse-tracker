"use strict";

const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const transaction = document.getElementById("transaction");
const amount = document.getElementById("amount");
const dummyTransaction = [
  { id: 1, transaction: "Book", amount: -100 },
  { id: 2, transaction: "coins", amount: 200 },
  { id: 3, transaction: "Breakfast", amount: 300 },
  { id: 4, transaction: "mobile", amount: 400 },
];

function addTransaction(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  transaction.amount < 0 ? "minus" : "plus";
  console.log(sign);
}
function init() {
  list.innerHTML = "";
  dummyTransaction.forEach(addTransactionDOM);
}
init();
