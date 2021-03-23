var startButton = document.getElementById("start");

var codeQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["1.strings", "2.booleans", "3.alerts", "4.number"],
    correct: "3",
  },
  {
    question:
      "The condition in an if / else statement is enclosed withtin _____.",
    answers: [
      "1.quotes",
      "2.curly brackets",
      "3.parentheses",
      "4.square brackets",
    ],
    correct: "3",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      "1.numbers and strings",
      "2.other arrays",
      "3.booleans",
      "4.all of the above",
    ],
    correct: "4",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    answers: ["1.commas", "2.curly brackets", "3.quotes", "4.parentheses"],
    correct: "3",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1.JavaScript",
      "2.terminal/bash",
      "3.for loops",
      "4.console.log",
    ],
    correct: "4",
  },
];
// console.log(codeQuestions);

function isCorrect(correctAnswer) {
  if ((correct = true)) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}
// console.log(correctAnswer);
startButton.addEventListener("click", function () {
  isCorrect();
});
