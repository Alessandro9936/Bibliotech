import axios from "axios";

const formattedBook = (rawBook) => {
  const title = rawBook.title;
  const author = rawBook.authors[0].name;
  const cover = rawBook.cover_id;
  const key = rawBook.key;

  return {
    title,
    cover,
    author,
    key,
  };
};

export const dataHandler = (() => {
  let books;

  const getBooksByCategory = async (category) => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/subjects/${category}.json`,
        { timeout: 3000 }
      );
      const { works: rawBooks } = response.data;

      if (!rawBooks.length) throw error;

      books = _formatBooks(rawBooks);
      return books;
    } catch (error) {
      if (error.response) {
        //response status is an error code, input field not filled
        return "Input field can't be empty, please search for a category";
      } else if (error.request) {
        //response not received though the request was sent, timeout exceeded
        return `${error.message}, your internet may be too slow`;
      } else {
        //an error occurred when setting up the request, searched category does not exists
        return `"${category}" category does not exist`;
      }
    }
  };

  function _formatBooks(rawBooks) {
    const bookArray = rawBooks.map((rawBook) => formattedBook(rawBook));
    return bookArray;
  }

  const getBookDescription = async (bookInList) => {
    try {
      const clickedBook = books.at(bookInList);
      const response = await axios.get(
        `https://openlibrary.org${clickedBook.key}.json`
      );
      const bookDescription =
        response.data.description.value ?? response.data.description;
      return { clickedBook, bookDescription };
    } catch (err) {}
  };

  return {
    getBooksByCategory,
    getBookDescription,
  };
})();
