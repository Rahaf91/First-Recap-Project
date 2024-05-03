console.clear();
////Show answer button////////////////
const answerCard = document.querySelector("[data-js='answer']");
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
    bookmarkIcon.classList.add("card__icon__bookmarked");
  } else {
    hideAnswer();
    showButton.textContent = "Show Answer";
  }
});

//////////////Bookmark button///////////////////////////
const link = document.querySelector('[ data-js="bookmark-click"]');

link.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("card__icon__bookmarked");
});
