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

  searchCategoryBtn.addEventListener("click", async () => {
    try {
      handleView.displaySpinner();
      const category = document.getElementById("category").value.toLowerCase();
      const booksArray = await dataHandler.getBooksByCategory(category);

      // error comes from the thrown error based on condition from dataHandler
      if (typeof booksArray !== "object") throw error;

      handleView.handleBookPreviews(booksArray);
    } catch (error) {
      handleView.displayErrorMessage(error.message);
    }
  });

  window.addEventListener("click", async (e) => {
    try {
      if (
        e.target.classList.contains("learn__more") ||
        e.target.classList.contains("chevron-down")
      ) {
        const bookInList = e.target.closest("li").dataset.numBook;
        const { clickedBook, bookDescription } =
          await dataHandler.getBookDescription(bookInList);
        handleView.handleBookDisplay(clickedBook, bookDescription);
      }
    } catch (error) {
      handleView.displayDesErrMessage(e, error);
    }
  });

  [hideBookContBtn, hideOverlay].forEach((el) =>
    el.addEventListener("click", () => handleView.toggleBookContainer())
  );
})();
