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
const emptyState = document.getElementById("emptyState");

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
    libraryContainer.innerHTML = '';

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
        pagesText.textContent = `${book.pages} pages`;

        pagesEl.append(pagesIcon, pagesText);

        const actionsDiv = document.createElement("div");
        actionsDiv.classList.add("card-actions");

        const readBtn = document.createElement("button");
        readBtn.classList.add("btn-card", "btn-status");

        if(book.isRead) {
            readBtn.classList.add("read");
            readBtn.innerHTML = '<span class="mdi mdi-check-circle-outline"></span> Read'; 
        } else {
            readBtn.classList.add("not-read");
            readBtn.innerHTML = '<span class="mdi mdi-checkbox-blank-circle-outline"></span> Not Read';
        }

        readBtn.addEventListener("click", () => toogleBookRead(book.id));

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn-card", "btn-delete");
        deleteBtn.innerHTML = '<span class="mdi mdi-trash-can-outline"></span> Remove';

        deleteBtn.addEventListener("click", () => removeBook(book.id));

        actionsDiv.append(readBtn, deleteBtn);
        card.append(titleEl, authorEl, pagesEl, actionsDiv);

        libraryContainer.appendChild(card);
    });
}

addBookBtn.addEventListener("click", () => bookDialog.showModal());
closeDialogBtn.addEventListener("click", () => bookDialog.close());

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;

    addBookToLibrary(title, author, pages, isRead);

    bookForm.reset();
    bookDialog.close();
});