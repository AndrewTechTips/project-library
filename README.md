<div align="center">

  <h1>🌙 Midnight Library</h1>
  
  <p>
    A minimal, atmosphere-focused <strong>Book Tracking Application</strong>. 
    Built to demonstrate <strong>Object-Oriented JavaScript</strong> concepts wrapped in a modern, 
    responsive dark-themed interface.
  </p>

  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-OOP-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  </p>

  <h3>
    <a href="https://andrewtechtips.github.io/project-library/">📚 OPEN LIBRARY</a>
  </h3>
</div>

<br />

---

## ✨ Features

* **🌑 Immersive Dark Mode:** Designed with a deep slate palette (`#0f172a`) and gradients for late-night reading sessions.
* **⚡ Native Modals:** Utilizes the modern HTML5 `<dialog>` API for smooth, accessible popups with backdrop filters.
* **📖 Dynamic Tracking:** Add new books, remove them, or toggle their "Read" status instantly.
* **📱 Responsive Grid:** The layout adapts automatically from mobile screens to wide desktops using CSS Grid `minmax()`.
* **🎲 Crypto IDs:** Uses `crypto.randomUUID()` to generate collision-proof unique identifiers for every book entry.

---

## 🧠 Under the Hood

This project focuses on **Vanilla JavaScript** logic without frameworks. It implements modern **ES6 Classes** to manage book objects efficiently:

### Class-Based Architecture
Refactored from plain constructors to modern syntax, the `Book` class encapsulates data and behavior in a clean, readable structure:

```javascript
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        
        this.id = crypto.randomUUID(); // Modern UUID generation
    }

    // Method shared across all Book instances
    toggleReadStatus() {
        this.isRead = !this.isRead;
    }
}
```
---

## 🎨 Resources Used

* **Icons:** [Material Design Icons (MDI)](https://materialdesignicons.com/) - Integrated via CDN to provide crisp, vector-based UI icons.
* **Typography:** [Outfit](https://fonts.google.com/specimen/Outfit) - Hosted on Google Fonts, selected for its modern and clean geometric look.

---

## 🚀 Getting Started

To run this project locally on your machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/AndrewTechTips/project-library.git]
    ```

2.  **Run the app:**
    Navigate to the project folder and simply open the `index.html` file in your preferred browser. No installation or build steps are required!

---

## 📬 Contact

If you want to contact me, you can reach me at:

* **LinkedIn:** www.linkedin.com/in/andrei-condrea-b32148346
* **Email:**  condrea.andrey777@gmail.com

<p align="center">
    <i>"A room without books is like a body without a soul." 🕯️</i>
</p>
