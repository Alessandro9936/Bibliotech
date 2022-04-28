import "../css/general.css";
import "../css/pagination.css";
import "../css/searchBar.css";
import "../css/showBook.css";

import { dataHandler } from "./data";

const init = (() => {
  const searchCategoryBtn = document.querySelector(".search__btn");

  searchCategoryBtn.addEventListener("click", async (e) => {
    try {
      const category = document.getElementById("category").value;
      const booksArray = await dataHandler.getBooksByCategory(category);
      console.log(booksArray);
    } catch (err) {
      console.error(err);
    }
  });
})();
