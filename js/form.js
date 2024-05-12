console.clear();
const form = document.querySelector('[data-js="card-form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted");

  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const cardQuestion = formElements.question.value;
  const cardAnswer = formElements.answer.value;
  const cardTag = formElements.tag.value;

  ////////////Add Elements////////////////////////
  const newCard = document.createElement("section");
  newCard.classList.add("card");
  newCard.dataset.js = "card";
  document.body.append(newCard);

  const cardText = document.createElement("p");
  cardText.classList.add("card__text");
  cardText.textContent = cardQuestion;
  newCard.append(cardText);

  const bookmarkLink = document.createElement("a");
  bookmarkLink.classList.add("test");
  const bookmarkIcon = document.createElement("i");
  bookmarkIcon.classList.add("fa", "fa-bookmark", "card__icon");
  bookmarkIcon.dataset.js = "bookmark";
  bookmarkIcon.style.fontSize = "48px";
  bookmarkLink.append(bookmarkIcon);
  newCard.append(bookmarkLink);

  // Add the show answer button
  const showAnswerButton = document.createElement("button");
  showAnswerButton.classList.add("card__button");
  showAnswerButton.type = "button";
  showAnswerButton.dataset.js = "show-btn";
  showAnswerButton.textContent = "Show Answer";
  newCard.append(showAnswerButton);

  const answerText = document.createElement("p");
  answerText.classList.add("card__text", "card__answer");
  answerText.dataset.js = "answer";
  answerText.hidden = true;
  answerText.textContent = cardAnswer;
  newCard.append(answerText);
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("card__icon__bookmarked");
  });

  showAnswerButton.addEventListener("click", () => {
    if (answerText.hasAttribute("hidden")) {
      answerText.removeAttribute("hidden");
    } else {
      answerText.setAttribute("hidden", "");
    }
  });

  const tagText = document.createElement("p");
  tagText.classList.add("card__tag");
  tagText.textContent = cardTag;
  newCard.append(tagText);

  event.target.reset();
  formElements.question.focus();
});

/*const input = document.querySelector('[data-js="card-question"]'); //here I tried first to target just the first textarea
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);
input.addEventListener("input", (event) => {
  const numberOfCharsEntered = event.target.value.length;
  charactersLeftElement.textContent = 150 - numberOfCharsEntered;
 
});*/

/*const textAreas = form.querySelectorAll('textarea[data-js^="card"]');
const maxCharacters = formElements.textArea.getAttribute("maxlength");

textAreas.forEach((textarea) => {
  const charactersLeftElement = textarea.nextElementSibling.querySelector(
    '[data-js="remaining-characters"]'
  );

  textarea.addEventListener("input", (event) => {
    const numberOfCharsEntered = event.target.value.length;
    charactersLeftElement.textContent = maxCharacters - numberOfCharsEntered;
  });
});
*/

document.querySelectorAll('textarea[data-js^="card"]').forEach((textarea) => {
  const amountLeft = textarea.nextElementSibling.querySelector(
    '[data-js="amountLeft"]'
  );
  const maxLength = textarea.getAttribute("maxlength");

  const updateAmountLeft = () => {
    amountLeft.innerText = maxLength - textarea.value.length;
  };

  updateAmountLeft();

  textarea.addEventListener("input", () => {
    updateAmountLeft(maxLength - textarea.value.length);
  });
  textarea.form.addEventListener("submit", () => {
    amountLeft.textContent = maxLength;
  });
});
