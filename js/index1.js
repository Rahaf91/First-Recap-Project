console.clear();

////Show answer button////////////////
/*const answerCard = document.querySelector("[data-js='answer']");
const showButton = document.querySelector("[data-js='show-btn']");
const bookmarkIcon = document.querySelector("[data-js='bookmark']");

function hideAnswer() {
  answerCard.setAttribute("hidden", "");
}

function showAnswer() {
  answerCard.removeAttribute("hidden");
}

hideAnswer();

showButton.addEventListener("click", () => {
  if (answerCard.hasAttribute("hidden")) {
    showAnswer();
    showButton.textContent = "Hide Answer";
    //bookmarkIcon.classList.add("card__icon__bookmarked");
  } else {
    hideAnswer();
    showButton.textContent = "Show Answer";
  }
});*/

/*console.clear();

////Show answer buttons////here just trying out to target all the questions in the page////////////
const answerCards = document.querySelectorAll("[data-js='answer']");
const showButtons = document.querySelectorAll("[data-js='show-btn']");


function hideAnswer() {
  answerCards.forEach(card => {
    card.setAttribute("hidden", "");
  });
}

function showAnswer(card, button) {
  card.removeAttribute("hidden");
  button.textContent = "Hide Answer";
  bookmarkIcon.classList.add("card__icon__bookmarked");
}

function toggleAnswer(card, button) {
  if (card.hasAttribute("hidden")) {
    showAnswer(card, button);
  } else {
    card.setAttribute("hidden", "");
    button.textContent = "Show Answer";
  }
}

hideAnswer();

showButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const card = answerCards[index];
    toggleAnswer(card, button);
  });
});*/
