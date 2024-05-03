// bookmark.js

function setupBookmarkToggle() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const links = section.querySelectorAll("a.test > i");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        link.classList.toggle("card__icon__bookmarked");
      });
    });
  });
}

// Call the function to set up the bookmark toggle on page load
setupBookmarkToggle();
