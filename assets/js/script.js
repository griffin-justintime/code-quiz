var startButton = document.getElementById("start");

startButton.addEventListener("click", function () {
  console.log("hello world");
});

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
];
