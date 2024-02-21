document.addEventListener("DOMContentLoaded", () => {
  const bookListElement = document.getElementById("bookList");

  // Fetch books from the API

  fetch(
    "https://api.allorigins.win/raw?url=https://simple-books-api.glitch.me/books"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((books) => {
      // Render books in list format
      renderBooks(books, bookListElement);
    })
    .catch((error) => {
      console.error("Error fetching books:", error.message);
      bookListElement.innerHTML = "<li>Error fetching books</li>";
    });
});

// Function to render books in list format
function renderBooks(books, container) {
  const bookItems = books.map(
    (book) =>
      `<div class="book_cover"> <div class="title"><h3>${book.name}</h3></div> - <div class="book_type"><h4>${book.type}</h4></div></div>`
  );
  container.innerHTML = bookItems.join("");
}
