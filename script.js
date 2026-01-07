const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggleReadStatus = function() {
    this.isRead = !this.isRead;
};

const libraryContainer = document.getElementById("libraryContainer");
const emptyState = document.getElementById("emtpyState");

const bookDialog = document.getElementById("bookDialog");
const bookForm = document.getElementById("bookForm");
const addBookBtn = document.getElementById("addBookBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);

    displayBooks();
}

function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);

    if(index > -1) {
        myLibrary.splice(index, 1);
        displayBooks();
    }
}

function toogleBookRead(id) {
    const book = myLibrary.find(book => book.id === id);

    if(book) {
        book.toggleReadStatus();
        displayBooks();
    }
}

