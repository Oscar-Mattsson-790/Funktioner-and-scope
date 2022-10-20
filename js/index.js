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

// function add(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }

// function addTwoNumbers(num1, num2, operator) {
//   let result;
//   if (operator == "+") result = add(num1, num2);
//   return result;
// }

// console.log(addTwoNumbers(5, 5, "+"));

// addTwoNumbers(num1, num2, operator);

// Övning 4

// function startGame() {
//   cm = Math.floor(Math.random() * 3);

//   input = prompt("Enter your Choices!");

//   pm = parseInt(input);

//   if (cm == 0 && pm == 1) {
//     alert("You beat Computer with Paper against Rock");
//   } else if ((cm = 0 && pm == 2)) {
//     alert("Comptuer Beat you with Rock");
//   } else if ((cm = 1 && pm == 0)) {
//     alert("Compiter Beat you with Paper");
//   } else if ((cm = 2 && pm == 2)) {
//     alert("You beat Computer with Scissor against Paper");
//   } else if ((cm = 2 && pm == 0)) {
//     alert("You beat Computer with Rock against Scissor");
//   } else if ((cm = 2 && pm == 1)) {
//     alert("Computer Beat you with Scissor");
//   } else {
//     alert("It's a tie");
//   }
// }

// startGame();

// ÖVNING 5
const val = [
  ["Chair 1", "Chair 2", " Chair 3"],
  ["Bed 1", "Bed 2", "Bed 3"],
  [],
];

const text = [
  [
    "After she'd eaten the three bears' breakfasts, she decided she was feeling a little tired. So, she walked into the living room where she saw three chairs. Goldilocks sat in the first chair to rest.",
  ],
  [
    `"Ahhh, this chair is just right," she sighed. But just as she settled down into the chair to rest, it broke into pieces!`,
  ],
  [
    `Goldilocks was very tired by this time, she went upstairs to the bedroom. She lay down in the first bed, but it was too hard. Then she lay in the second bed, but it was too soft. Then she lay down in the third bed and it was just right. Goldilocks fell asleep.
  As she was sleeping, the three bears came home.
  "Someone's been eating my porridge," growled the Papa bear.
  "Someone's been eating my porridge," said the Mama bear.
  "Someone's been eating my porridge and they ate it all up!" cried the Baby bear.
  "Someone's been sitting in my chair," growled the Papa bear.
  "Someone's been sitting in my chair," said the Mama bear.
  "Someone's been sitting in my chair and they've broken it to pieces," cried the Baby bear.
  They decided to look around some more and when they got upstairs to the bedroom, Papa bear growled,
  "Someone's been sleeping in my bed.”
  "Someone's been sleeping in my bed, too" said the Mama bear.
  "Someone's been sleeping in my bed and she's still there!" exclaimed the Baby bear.
  Just then, Goldilocks woke up. She saw the three bears. She screamed, "Help!" And she jumped up and ran out of the room. Goldilocks ran down the stairs, opened the door, and ran away into the forest. She never returned to the home of the three bears.`,
  ],
];
const choice = [["Choose Chair"], ["Choose Bed"]];
let count = 0;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const story = document.querySelector("#story");
const choices = document.querySelector("#choices");
button1.addEventListener("click", () => {
  alert("You Died!");
});
button2.addEventListener("click", () => {
  alert("You Died!");
});
button3.addEventListener("click", () => {
  button1.innerHTML = val[count][0];
  button2.innerHTML = val[count][1];
  button3.innerHTML = val[count][2];
  story.innerHTML = text[count];
  choices.innerHTML = choice[count];
  count++;
  console.log(count);
  if (count === 3) {
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    choices.style.display = "none";
  }
});
