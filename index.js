//Darkmode
const toggleButton = document.querySelector("[data-js='toggle-button']");
const body = document.querySelector("[data-js='body']");
const theHeader = document.querySelector("[data-js='header']");
const counter = document.querySelector("[data-js='counter']");
const footer = document.querySelector("[data-js='footer']");

toggleButton.addEventListener("click", () => {
  console.log("hi");
  body.classList.toggle("dark-mode");
  theHeader.classList.toggle("dark-mode");
  counter.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");
});
