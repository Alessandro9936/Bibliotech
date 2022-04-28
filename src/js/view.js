export const handleView = (() => {
  const bookPreviewsCont = document.querySelector(".books-container");

  function _displayContainer() {
    bookPreviewsCont.classList.remove("hidden");
    bookPreviewsCont.innerHTML = "";
  }

  const handleBookPreviews = (books) => {
    _displayContainer();
    _displayBooksPreviews(books);
  };

  function _displayBooksPreviews(books) {
    books.forEach((book, index) => {
      const currBook = _generateMarkup(book, index);
      bookPreviewsCont.appendChild(currBook);
    });
  }

  function _generateMarkup(book, index) {
    const li = document.createElement("li");
    li.classList.add("book-preview");
    li.dataset.numBook = index;

    const bookPreviewContent = `
    <div class="book__info">
      <div class="book__info--image">
        <img src="https://covers.openlibrary.org/b/id/${book.cover}-M.jpg" />
      </div>
      <ul class="book__info--about">
        <li><strong>Title</strong>: ${book.title}</li>
        <li><strong>Author</strong>: ${book.author}</li>
      </ul>
    </div>
    <div class="learn__more">
      <ion-icon name="chevron-down-outline" class="chevron-down"></ion-icon>
    </div>
    `;

    li.insertAdjacentHTML("beforeend", bookPreviewContent);
    return li;
  }

  return {
    handleBookPreviews,
  };
})();
