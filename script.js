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

function displayBooks() {
    libraryContainer.innerHTML = "";

    if(myLibrary.length === 0) {
        libraryContainer.appendChild(emptyState);
        emptyState.style.display = "flex";
        return;
    }

    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        card.dataset.id = book.id;

        const titleEl = document.createElement("h3");
        titleEl.textContent = book.title;

        const authorEl = document.createElement("div");
        authorEl.classList.add("book-info");

        const authorIcon = document.createElement("span");
        authorIcon.className = "mdi mdi-account-outline";

        const authorText = document.createElement("span");
        authorText.textContent = book.author;

        authorEl.append(authorIcon, authorText);

        const pagesEl = document.createElement("div");
        pagesEl.classList.add("book-info");

        const pagesIcon = document.createElement("span");
        pagesIcon.className = "mdi mdi-book-open-page-variant-outline";
        
        const pagesText = document.createElement("span");
        pages.textContent = `${book.pages} pages`;

        pagesEl.append(pagesIcon, pagesText);
        
    })
}