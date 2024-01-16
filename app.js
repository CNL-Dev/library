const bookContainer = document.querySelector(".book-container");
const library  = [];

// Book constructor
function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

// Add a book to the library array
function addBookToLibrary(book) {
    library.push(book);
}

// Iterates through the library array
function iterateThroughLibrary() {

}

// Displays the books in the bookContainer
function displayBooks() {
    for(i = 0; i < library.length - 1; i++){
        const bookDisplay = document.createElement('div');

        bookContainer.appendChild(bookDisplay)
    }
}