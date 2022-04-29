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

      // booksArray can contain both the array of books (if the promise was
      // fulfilled) or the error (if the promise was rejected). For this
      // reason if the promise returned an error message it will be stored in the
      // booksArray (as a string and not an object).

      if (typeof booksArray !== "object") throw new Error(booksArray);

      handleView.handleBookPreviews(booksArray);
    } catch (err) {
      handleView.displayErrorMessage(err.message);
    }
  });

  window.addEventListener("click", async (e) => {
    if (
      e.target.classList.contains("learn__more") ||
      e.target.classList.contains("chevron-down")
    ) {
      const bookInList = e.target.closest("li").dataset.numBook;
      const { clickedBook, bookDescription } =
        await dataHandler.getBookDescription(bookInList);
      handleView.handleBookDisplay(clickedBook, bookDescription);
    }
  });

  [hideBookContBtn, hideOverlay].forEach((el) =>
    el.addEventListener("click", () => handleView.toggleBookContainer())
  );
})();
