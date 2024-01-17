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
    for(i = 0; i < library.length; i++){
        const bookDisplay = document.createElement('div');
        bookDisplay.classList.add('book-content');

        const bookTitle = document.createElement('p');
        bookTitle.textContent = library[i].title;

        const bookAuthor =  document.createElement('p');
        bookAuthor.textContent = library[i].author;

        const bookPages = document.createElement('p');
        bookPages.textContent = library[i].pages;

        const bookHasRead = document.createElement('p');
        bookHasRead.textContent = library[i].hasRead;

        bookDisplay.appendChild(bookTitle);
        bookDisplay.appendChild(bookAuthor);
        bookDisplay.appendChild(bookPages);
        bookDisplay.appendChild(bookHasRead);

        bookContainer.appendChild(bookDisplay)
    }
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
displayBooks();