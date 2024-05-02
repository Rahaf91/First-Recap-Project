//Darkmode
const toggleButton = document.querySelector("[data-js='toggle-button']");
const body = document.querySelector("[data-js='body']");
const theHeader = document.querySelector("[data-js='header']");
const counter = document.querySelector("[data-js='counter']");
const footer = document.querySelector("[data-js='footer']");

/*showButton.addEventListener("click", () => {
  if (answerCard.style.display === "none") {
    answerCard.style.display = "block";
    showButton.textContent = "Hide Answer";
    bookmarkIcon.classList.add("card__icon__bookmarked");
  } else {
    answerCard.style.display = "none";
    showButton.textContent = "Show Answer";
   
  }
});*/

toggleButton.addEventListener("click", () => {
  console.log("hi");
  body.classList.toggle("dark-mode");
  theHeader.classList.toggle("dark-mode");
  counter.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");
});
