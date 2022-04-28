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
})();
