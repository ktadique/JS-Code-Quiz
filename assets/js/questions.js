//grab necessary html elements and store them into global variables
//  seperate into other files later
"strict code";

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

let quizQuestions = [
  {
    //q1
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<js>", "<javascript>", "<scripting>"],
    answer: "<script>",
  },
  {
    //q2
    question: "How do you write 'Hello World!' in an alert box?",
    choices: [
      "prompt('Hello World!')",
      "alertBox('Hello World!')",
      "alert('Hello World!')",
      "msg('Hello World!')",
    ],
    answer: "alert('Hello World!')",
  },
  /*
  {
    //q3
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["", "", "", ""],
  }, */
];
