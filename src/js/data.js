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
    const response = await axios.get(
      `https://openlibrary.org/subjects/${category}.json`
    );
    const { works: rawBooks } = response.data;
    books = _formatBooks(rawBooks);
    return books;
  };

  function _formatBooks(rawBooks) {
    const bookArray = rawBooks.map((rawBook) => formattedBook(rawBook));
    return bookArray;
  }

  return {
    getBooksByCategory,
  };
})();
