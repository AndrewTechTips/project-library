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