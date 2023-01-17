//save initials and score function
let clearBtn = document.querySelector("#clear");

function showHighscore() {
  let highscoreList = document.getElementById("highscores");

  let highscores = [];

  let userScoreProfileString = localStorage.getItem("userScoreProfile");
  let lastUserScore = JSON.parse(userScoreProfileString);
  let highscoreListItem = document.createElement("li");

  highscoreList.appendChild(highscoreListItem);

  highscoreListItem.textContent = `${lastUserScore.name} - ${lastUserScore.score}`;
}

showHighscore();

clearBtn.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
