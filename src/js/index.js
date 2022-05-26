import "../css/general.css";
import "../css/pagination.css";
import "../css/searchBar.css";
import "../css/showBook.css";

import { dataHandler } from "./data";
import { handleView } from "./view";

const init = (() => {
  const searchCategoryBtn = document.querySelector(".search__btn");
  const hideBookContBtn = document.querySelector(".close-modal");
  const hideOverlay = document.querySelector(".overlay");

  // Get books by category when user click on search button or click enter
  searchCategoryBtn.addEventListener("click", bookByCategory);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      bookByCategory();
    }
  });

  // Each book previews has a button to show its specifics (with an event listener attached), if the user clicks on it bookDescription is called
  window.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains("learn__more") ||
      target.classList.contains("chevron-down")
    ) {
      bookDescription(target);
    }
  });

  // Close book specifics modal
  [hideBookContBtn, hideOverlay].forEach((el) =>
    el.addEventListener("click", () => handleView.toggleBookContainer())
  );

  // Get all books of category
  async function bookByCategory() {
    try {
      handleView.displaySpinner();
      const category = document.getElementById("category").value.toLowerCase();
      const booksByCategory = await dataHandler.getBooksByCategory(category);

      // error comes from dataHandler - If value of booksArray is not array return the error
      if (!Array.isArray(booksByCategory)) throw error;

      handleView.handleBookPreviews(booksByCategory);
    } catch (error) {
      handleView.displayErrorMessage(error.message);
    }
  }

  // Get description of clicked book
  async function bookDescription(bookTarget) {
    try {
      //BookInArray is the clicked book in the preview list, we just need its number in the list
      const bookInArray = bookTarget.closest("li").dataset.numBook;
      const { clickedBookData, bookDescription } =
        await dataHandler.getBookDescription(bookInArray);
      handleView.handleBookDisplay(clickedBookData, bookDescription);
    } catch (error) {
      handleView.displayDescriptionErrorMessage(bookTarget, error);
    }
  }
})();
