"strict code";

let currentQuestion;
let countdownTimer = 50;
let start = document.querySelector("#start");
let timer = document.querySelector("#time");
let feedback = document.querySelector("#feedback");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let scoreSubmit = document.querySelector("#submit");
let questionScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choicesDiv = document.querySelector("#choices");

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
    if 

    a variable that holds the number of the questino theyre on
      clear the page
      redraw the content
      increment what question were on

The quiz should end when all questions are answered or the timer reaches 0.

When the game ends, it should display their score and give the user the ability to save their initials and their score 
*/
//-------------------------------
////////////////////////////////////////////////

//startQuiz function to start quiz
function startQuiz() {
  let startScreen = document.querySelector("#start-screen");
  //change #start-screen class from start to hide
  //unhide #questions by changing class from hide
  startScreen.setAttribute("class", "hide");
  questionScreen.classList.remove("hide");
  feedback.classList.remove("hide");
  currentQuestion = 0;

  countdown();
  renderQuestion();
}

//clear previous question and then draw next question
function renderQuestion() {
  clearQuestion();
  drawQuestion();
}

//dr
function drawQuestion() {
  let theQuestion = quizQuestions[currentQuestion].question;
  questionTitle.innerText = theQuestion;

  //create an ordered list of answers
  let choicesList = document.createElement("ol");
  let answers = quizQuestions[currentQuestion].choices;

  //append the ordered list inside the choices div
  choicesDiv.appendChild(choicesList);

  //create a for loop that will loop through all the choices
  //within the quizQuestions Array
  for (i = 0; i < answers.length; i++) {
    //create a button with an ordered list item inside
    //for each choice within quizQuestion
    let choiceButton = document.createElement("button");
    let choices = document.createElement("li");

    choicesList.appendChild(choiceButton);
    choiceButton.appendChild(choices);
    choices.textContent = answers[i];
  }
  choices.addEventListener("click", userChoice);
}

//Clear current question function
function clearQuestion() {
  questionTitle.innerText = "";
  choices.innerText = "";
}

//Endscreen function
function endQuiz() {}

//Answer selection function
function userChoice(e) {
  let selection = e.target.innerText;
  console.log(selection);
  let correctAnswer = quizQuestions[currentQuestion].answer;
  console.log(correctAnswer);

  if (selection == correctAnswer) {
    feedback.textContent = "you got it right!";
    currentQuestion++;
    renderQuestion();
  } else {
    feedback.textContent = "you got it wrong!";
    countdownTimer -= 10;
  }
}

//Countdown Function
function countdown() {
  let countdownInterval = setInterval(function () {
    countdownTimer--;
    timer.textContent = countdownTimer;

    if (countdownTimer <= 0) {
      clearInterval(countdownInterval);
      endScreen.setAttribute("class", "start");
    }
  }, 1000);
}

//event listeners

start.addEventListener("click", function () {
  startQuiz();
});
