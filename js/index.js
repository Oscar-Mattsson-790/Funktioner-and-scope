// const buttonElem = document.querySelector("#button");
// function add(firstNumber, secondNumber) {
//   const sum = firstNumber + secondNumber;

//   return sum;
// }

// function showSum(sum) {
//   console.log(`Summan är: ${sum}`); // template strings
// }

// function start() {
//   const sumToAdd = add(5, 5);

//   showSum(sumToAdd); // Värdet i variablen (sumToAdd) som vi skickar med
// }

// start();

// buttonElem.addEventListener("click", () => {});

// ÖVNING 1
// let str = ["hej", "på", "dig", "vad", "händer?"];
// function getLength(str) {
//   return str.length;
// }
// console.log(str.length);

// ÖVNING 2
// let year = "2019-10-14";
// function getYear(year) {
//   return year;
// }
// console.log(year.substring(0, 4));

// Övning 3

// let num1 = 5;
// let num2 = 5;
// let operator = "+";

// function addTwoNumbers(num1, num2, operator) {
//   return eval(num1 + operator + num2);
// }

// console.log(addTwoNumbers(5, 5, "+"));

// addTwoNumbers(num1, num2, operator);

// Övning 4

function startGame() {
  cm = Math.floor(Math.random() * 3);

  input = prompt("Enter your Choices!");

  pm = parseInt(input);

  if (cm == 0 && pm == 1) {
    alert("You beat Computer with Paper against Rock");
  } else if ((cm = 0 && pm == 2)) {
    alert("Comptuer Beat you with Rock");
  } else if ((cm = 1 && pm == 0)) {
    alert("Compiter Beat you with Paper");
  } else if ((cm = 2 && pm == 2)) {
    alert("You beat Computer with Scissor against Paper");
  } else if ((cm = 2 && pm == 0)) {
    alert("You beat Computer with Rock against Scissor");
  } else if ((cm = 2 && pm == 1)) {
    alert("Computer Beat you with Scissor");
  } else {
    alert("It's a tie");
  }
}

startGame();
