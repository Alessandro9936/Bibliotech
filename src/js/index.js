import "../css/general.css";
import "../css/pagination.css";
import "../css/searchBar.css";
import "../css/showBook.css";

import { dataHandler } from "./data";
import { handleView } from "./view";

const init = (() => {
  const searchCategoryBtn = document.querySelector(".search__btn");

  searchCategoryBtn.addEventListener("click", async () => {
    try {
      const category = document.getElementById("category").value;
      const booksArray = await dataHandler.getBooksByCategory(category);
      handleView.handleBookPreviews(booksArray);
    } catch (err) {
      console.error(err);
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
})();
