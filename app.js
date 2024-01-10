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