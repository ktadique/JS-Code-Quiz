"strict code";

let start = document.querySelector("#start");
let timer = document.querySelector("#time");
let feedback = document.querySelector("#feedback");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let scoreSubmit = document.querySelector("#submit");

////////////////////////////////////////////////
// Quiz Psuedocode
//-------------------------------
/* 
"A start button that when clicked a timer starts..." 

declare a startQuiz function to start quiz
  grab start button using queryselector
      add a click event listener to start button
    declare a function to start a timer
      use setInterval method to count down
  change #start-screen class from start to hide
  unhide #questions by changing class from hide to start

  Create an array of objects which contain the question, choices and answers
    declare a function that renders the questions


"...and the first question appears."
Questions contain buttons for each answer.
When answer is clicked, the next question appears
  If the answer clicked was incorrect then subtract time from the clock

The quiz should end when all questions are answered or the timer reaches 0.

When the game ends, it should display their score and give the user the ability to save their initials and their score 
*/
//-------------------------------
////////////////////////////////////////////////

//declare a startQuiz function to start quiz
function startQuiz() {
  let startScreen = document.querySelector("#start-screen");
  //change #start-screen class from start to hide
  startScreen.setAttribute("class", "hide");

  countdown();
  question();
}

function question() {
  let questionScreen = document.querySelector("#questions");
  let questionTitle = document.querySelector("#question-title");
  let choicesDiv = document.querySelector("#choices");

  //unhide #questions by changing class from hide
  questionScreen.removeAttribute("class", "hide");

  for (i = 0; i < quizQuestions.length; i++) {
    let theQuestion = quizQuestions[i].question;
    questionTitle.innerText = theQuestion;
  }

  //Questions contain buttons for each answer.
  let choicesList = document.createElement("ol");
  choicesDiv.appendChild(choicesList);

  for (i = 0; i < quizQuestions[i].answers.length; i++) {
    let choiceButton = document.createElement("button");
    let choices = document.createElement("li");

    // let choicesText =
    choicesList.appendChild(choiceButton);
    choiceButton.appendChild(choices);
    choices.textContent = quizQuestions[i].answers[i];
  }
}
let countdownTimer = 20;

function countdown() {
  let countdownInterval = setInterval(function () {
    countdownTimer--;
    timer.textContent = countdownTimer;

    if (countdownTimer === 0) {
      clearInterval(countdownInterval);
      endScreen.setAttribute("class", "start");
    }
  }, 1000);
}

//DOM

start.addEventListener("click", function () {
  startQuiz();
});
