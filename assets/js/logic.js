"strict code";

let start = document.querySelector("#start");
let timer = document.querySelector("#time");
let questions = document.querySelector("#questions");
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
  change #start-screen class from start to hide
  unhide #questions by changing class from hide to start

  declare a function to start a timer
    use setInterval method to count down
    

"...and the first question appears."
Questions contain buttons for each answer.

When answer is clicked, the next question appears
  If the answer clicked was incorrect then subtract time from the clock

The quiz should end when all questions are answered or the timer reaches 0.

When the game ends, it should display their score and give the user the ability to save their initials and their score 
*/
//-------------------------------
////////////////////////////////////////////////

function startQuiz() {
  let startScreen = document.querySelector("#start-screen");

  startScreen.setAttribute("class", "hide");
  countdown();
}

function countdown() {
  let countdownTimer = 20;
  let countdownInterval = setInterval(function () {
    countdownTimer--;
    timer.textContent = countdownTimer;

    if (countdownTimer === 0) {
      clearInterval(countdownInterval);
      startScreen.setAttribute("class", "start");
    }
  }, 1000);
}

start.addEventListener("click", function () {
  startQuiz();
});
