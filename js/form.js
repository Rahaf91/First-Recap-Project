console.clear();
const form = document.querySelector('[data-js="card-form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted");
  ////////////Add Elements////////////////////////
  const cardQuestion = document.querySelector(
    '[data-js="card-question"]'
  ).value;
  const cardAnswer = document.querySelector('[data-js="card-answer"]').value;
  const cardTag = document.querySelector('[data-js="card-tag"]').value;

  const card = document.createElement("section");
  card.classList.add("card");
  document.body.append(card);

  const questionText = document.createElement("p");
  questionText.classList.add("card__text");
  questionText.textContent = cardQuestion;
  card.append(questionText);

  const bookmarkLink = document.createElement("a");
  bookmarkLink.setAttribute("data-js", "bookmark-click");

  const bookmarkIcon = document.createElement("i");
  bookmarkIcon.classList.add("fa", "fa-bookmark", "card__icon");
  bookmarkIcon.setAttribute("data-js", "bookmark");
  bookmarkIcon.style.fontSize = "48px";

  bookmarkLink.append(bookmarkIcon);
  card.append(bookmarkIcon);

  const cardButton = document.createElement("button");
  cardButton.classList.add("card__button");
  cardButton.textContent = "show Answer";
  card.append(cardButton);

  const answerText = document.createElement("p");
  answerText.classList.add("card__text", "card__answer");
  answerText.textContent = cardAnswer;
  card.append(answerText);

  const tagText = document.createElement("p");
  tagText.classList.add("card__tags", "card__tag");
  tagText.textContent = "#" + cardTag;
  card.append(tagText);
  event.target.reset();
  document.querySelector('[data-js="card-question"]').focus();
});

/*const input = document.querySelector('[data-js="card-question"]'); //here I tried first to target just the first textarea
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);
input.addEventListener("input", (event) => {
  const numberOfCharsEntered = event.target.value.length;
  charactersLeftElement.textContent = 150 - numberOfCharsEntered;
 
});*/

const textAreas = form.querySelectorAll('textarea[data-js^="card"]'); //This method is to target all textareas in the form that starts with data-js="card"
const maxCharacters = 150;

textAreas.forEach((textarea) => {
  const charactersLeftElement = textarea.nextElementSibling.querySelector(
    '[data-js="remaining-characters"]'
  ); // here I wanted to target the span element with data-js="remaining-characters"

  textarea.addEventListener("input", (event) => {
    const numberOfCharsEntered = event.target.value.length;
    charactersLeftElement.textContent = maxCharacters - numberOfCharsEntered;
  });
});

form.addEventListener("submit", () => {
  textAreas.forEach((textarea) => {
    const charactersLeftElement = textarea.nextElementSibling.querySelector(
      '[data-js="remaining-characters"]'
    );
    charactersLeftElement.textContent = maxCharacters;
  });
});
