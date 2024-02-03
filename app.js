const bookContainer = document.querySelector(".book-container");
const library  = [];
const addBookButton = document.querySelector('.add-book-button');
const bookTitleInput = document.getElementById('bookTitle');
const bookAuthorInput = document.getElementById('bookAuthor');
const bookPagesInput = document.getElementById('bookPages');
const bookHasReadInput = document.getElementById('bookHasRead');
const removeButtons = document.querySelectorAll('.remove-book-button');
const readButtons = document.querySelectorAll('.read-book-button');

// Book constructor
function Book(id, title, author, pages, hasRead) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

removeButtons.forEach(button => {
    button.addEventListener('click', removeBookFromLibrary);
});

readButtons.forEach(button => {
    button.addEventListener('click', updateBookReadStatus);
});

// On click, adds a new book with the data provided
// via the form
addBookButton.addEventListener('click', createBook);

// Add a book to the library array
function addBookToLibrary(book) {
    library.push(book);
    refreshDisplay();
}

function removeBookFromLibrary() {
    for(i = 0; i < library.length; i++) {
        console.log(button.id + " " + library[i].id);
        if(button.id == library[i].id) {                
            if(library[i].hasRead == false) {
                library[i].hasRead = true;
            }
            else if (library[i].hasRead == true) {
                library[i].hasRead = false;
            }
            refreshDisplay();
            return;
        }
    }

    refreshDisplay();
}

function updateBookReadStatus() {
    for(i = 0; i < library.length; i++) {
        if(button.id == library[i].id) {
            const newLibrary = library.splice(i, i);
            library = newLibrary;
            refreshDisplay();
            return;
        }
    }
}

// Creates a new book
function createBook() {
    // Generate unique id
    const bookId = Date.now() + Math.random();  

    const newBook = new Book(
        bookId,
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

        const bookButtonContainer = document.createElement('div');
        bookButtonContainer.classList.add('book-button-container');

        const bookRemoveButton = document.createElement('button');
        bookRemoveButton.classList.add('remove-book-button');
        bookRemoveButton.setAttribute('id', `${library[i].id}`);
        bookRemoveButton.textContent = "X";

        const bookReadButton = document.createElement('button');
        bookReadButton.classList.add('read-book-button');
        bookReadButton.setAttribute('id', `${library[i].id}`);
        
        let bookReadButtonText = "";
        if(library[i].hasRead == true) {
            bookReadButtonText = "Mark as unread"
        }
        else {
            bookReadButtonText = "Mark as read"
        }

        bookReadButton.textContent = bookReadButtonText;

        bookButtonContainer.appendChild(bookReadButton);
        bookButtonContainer.appendChild(bookRemoveButton);

        bookDisplay.appendChild(bookTitle);
        bookDisplay.appendChild(bookAuthor);
        bookDisplay.appendChild(bookPages);
        bookDisplay.appendChild(bookHasRead);
        bookDisplay.appendChild(bookButtonContainer);

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
    const book1 = new Book(123, "Crime and Punishment", "Fyodor Dostoevsky", 527, true);
    const book2 = new Book(456, "No Longer Human", "Osamu Dazai", 176, true);
    const book3 = new Book(789, "Brave New World", "Aldous Huxley", 311, false);

    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
}

addTestBooks();