// here it targets all bookmarks
//bookmark.js

function BookmarkToggle() {
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
BookmarkToggle();

//////////////Bookmark button//////////Here it targets the first card/////////////////
/*const link = document.querySelector('[ data-js="bookmark-click"]');

link.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("card__icon__bookmarked");
});*/
