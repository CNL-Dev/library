const bookContainer = document.querySelector(".book-container");
const library  = [];
const addBookButton = document.querySelector('.add-book-button');
const bookTitleInput = document.getElementById('bookTitle');
const bookAuthorInput = document.getElementById('bookAuthor');
const bookPagesInput = document.getElementById('bookPages');
const bookHasReadInput = document.getElementById('bookHasRead');

// Book constructor
function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

// On click, adds a new book with the data provided
// via the form
addBookButton.addEventListener('click', createBook);

// Add a book to the library array
function addBookToLibrary(book) {
    library.push(book);
    refreshDisplay();
}

// Creates a new book
function createBook() {
    const newBook = new Book(
        bookTitleInput.value,
        bookAuthorInput.value,
        bookPagesInput.value,
        bookHasReadInput.checked
    );

    addBookToLibrary(newBook);
}

// Displays the books in the bookContainer
function displayBooks() {
    for(i = 0; i < library.length; i++){
        const bookDisplay = document.createElement('div');
        bookDisplay.classList.add('book-content');

        const bookTitle = document.createElement('p');
        bookTitle.textContent = `Title: ${library[i].title}`;

        const bookAuthor =  document.createElement('p');
        bookAuthor.textContent = `Author: ${library[i].author}`;

        const bookPages = document.createElement('p');
        bookPages.textContent = `Pages: ${library[i].pages}`;

        const bookHasRead = document.createElement('p');
        bookHasRead.textContent = `Has read? ${library[i].hasRead}`;

        bookDisplay.appendChild(bookTitle);
        bookDisplay.appendChild(bookAuthor);
        bookDisplay.appendChild(bookPages);
        bookDisplay.appendChild(bookHasRead);

        bookContainer.appendChild(bookDisplay)
    }
}

// Refreshes the display by removing all book-container content
// and calling display books again
function refreshDisplay() {
    bookContainer.innerHTML = '';

    displayBooks();
}

// Adds some books for display testing purposes
function addTestBooks(){
    const book1 = new Book("Crime and Punishment", "Fyodor Dostoevsky", 527, true);
    const book2 = new Book("No Longer Human", "Osamu Dazai", 176, true);
    const book3 = new Book("Brave New World", "Aldous Huxley", 311, false);

    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
}

addTestBooks();