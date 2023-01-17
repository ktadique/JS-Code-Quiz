"strict code";

let currentQuestion;
let countdownTimer = 30;
let countdownInterval;

var initialsInput = document.querySelector("#initials");
let startBtn = document.querySelector("#start");
let timer = document.querySelector("#time");
let feedback = document.querySelector("#feedback");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let submitBtn = document.querySelector("#submit");
let questionScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choicesDiv = document.querySelector("#choices");

////////////////////////////////////////////////
// Quiz Psuedocode
//-------------------------------
/* 
-show start page
- click start
  -start timer at 75s
    hide start screen
    unhide question screen
  -show question
    -select answer:
    is correct?
      -if no: 
        feedback (wrong)
        -5 from timer
      -if yes: 
          feedback (right)
            increment question
    - last question OR timer === 0
        hide questions
        show endscreen
          display final score
        - input initials
            if empty display error
        - click submit
          - save score and initials to local storage
          - redirect to highschore.html
            - retrieve values from local storage
              - display high score histories
                - clear history or 
                - go back to start page

                save score to local storage
                create array
                push score into array
                sort array
                display as ordered list score
*/

//-------------------------------
////////////////////////////////////////////////

//startQuiz function to start quiz
function startQuiz() {
  let startScreen = document.querySelector("#start-screen");
  //change #start-screen class from start to hide
  startScreen.setAttribute("class", "hide");
  //unhide question screen
  questionScreen.classList.remove("hide");
  //unhide feedback footer
  feedback.classList.remove("hide");
  //set current question array to 0
  currentQuestion = 0;

  //start timer
  countdown();
  //show question
  renderQuestion();
}

//show next question function
//clear previous question and then draw next question
function renderQuestion() {
  clearQuestion();
  drawQuestion();
}

//create questions
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
function endQuiz() {
  showScore();
  questionScreen.setAttribute("class", "hide");
  feedback.setAttribute("class", "hide");
  endScreen.classList.remove("hide");
}

//show score function
function showScore() {
  let finalScore = document.querySelector("#final-score");

  clearInterval(countdownInterval);
  finalScore.innerText = timer.textContent;
}

//Answer selection function
function userChoice(e) {
  let selection = e.target.innerText;
  console.log(selection);
  let correctAnswer = quizQuestions[currentQuestion].answer;
  console.log(correctAnswer);

  if (selection == correctAnswer) {
    feedback.textContent = "Correct!";
    currentQuestion++;
    if (currentQuestion === quizQuestions.length) {
      endQuiz();
    } else {
      renderQuestion();
    }
  } else {
    feedback.textContent = "Wrong!";
    countdownTimer -= 5;
  }
}

//Countdown Function
function countdown() {
  countdownInterval = setInterval(function () {
    countdownTimer--;
    timer.textContent = countdownTimer;

    if (countdownTimer <= 0) {
      timer.textContent = 0;
      endQuiz();
    }
  }, 1000);
}

//event listeners

startBtn.addEventListener("click", function () {
  startQuiz();
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  saveScore();
  window.location.href = "./highscores.html";
});

//initials input
function submitInitials() {
  let initials = initialsInput.value;
  if (initials) {
    return initials;
  } else {
    return "UNK";
  }
}

/* save score to local storage
create array
push score into array
sort array
display as ordered list score */

//save initials and score function
function saveScore() {
  let userInitials = submitInitials();
  //check if userScoreProfile Exists
  if (userScoreProfile)
    //if true, load values inside

    userScoreProfile = { name: userInitials, score: timer.textContent };
  localStorage.setItem("userScoreProfile", JSON.stringify(userScoreProfile));
}
