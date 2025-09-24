## Post Management System (Mini CRUD App)

This is a small **Mini CRUD App** built to manage posts, simulating a tiny blog administrator interface.

---

### Stack & Data Persistence

* **Stack:** React Vite 
* **Styling:** CSS/Bootstrap
* **Data:** Data is persisted using **localStorage** to simulate a backend.

---

### Core Features

The application supports the full **CRUD** (Create, Read, Update, Delete) cycle for posts:

* **Post List:** Displays posts with the title, author, date, and a short excerpt. [cite_start]Includes client-side **search by title** and **filter by author**.
* **Create Post:** A form with required fields (title, author, content) and client-side validation.
* **View Post (Details Page):** Shows the full content, tags as chips, and timestamps.
* **Edit/Delete Post:** Dedicated edit page pre-fills data and applies validations, and a confirmation dialog is used for deletion.
* **Routing:** Uses React Router for navigation with the following routes: `/`, `/posts/new`, `/posts/:id`, and `/posts/:id/edit`.

---

### How to Run Locally

1.  **Install Dependencies:** like:-(bootstrap, react-dom, react-router-dom) in the project directory.
2.  **Run the App:** Execute `npm run dev` (or `npm start`, depending on your setup).
3.  The app will typically open at `http://localhost:3000` (or similar).

The application starts with at least **10 seed posts** preloaded into localStorage.

---

### Screen Recording of actual project

https://github.com/user-attachments/assets/ba262bb0-38e5-41a7-b5e0-df55f8bccd45


