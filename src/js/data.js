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
    console.log(books);
    return books;
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
