# Blog Application (CRUD)

A simple **CRUD-based Blog Application** built using **Node.js, Express, and EJS**.
This project allows users to create, read, update, and delete blog posts with a clean and responsive UI.

> ⚠️ **Note:** This version uses **in-memory storage (array)**. Data resets when the server restarts. No database is used yet.

---

## 🚀 Features

* Create new blog posts
* View all blog posts
* View a single post in detail
* Edit existing posts
* Delete posts
* Clean, modern, and consistent UI

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, HTML, CSS
* **Styling:** Custom CSS
* **Storage:** In-memory (JavaScript array)

---

## 📂 Project Structure

```
project-root/
├── public/
│   └── style.css
├── views/
│   ├── index.ejs      # All posts
│   ├── new.ejs        # Create post
│   ├── edit.ejs       # Edit post
│   └── show.ejs       # Post details
├── index.js           # Main server file
├── package.json
└── README.md
```

---

## ▶️ How to Run Locally

1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
nodemon index.js
```

or

```bash
node index.js
```

4. Open in browser

```
http://localhost:3000/posts
```

---

## 📸 Screenshots

*Add screenshots of:*

* Blog list page
* Create post page
* Edit post page
* Post detail page

---

## 📌 Current Limitations

* No database (data stored temporarily in memory)
* Data is lost when the server restarts
* No authentication

---

## 🔮 Future Improvements

* Add MongoDB with Mongoose
* User authentication (login/signup)
* Authorization (only author can edit/delete)
* Comments and likes
* Image upload support
* Pagination and search

---

## 🎯 Learning Outcomes

* Understanding CRUD operations
* RESTful routing with Express
* Server-side rendering using EJS
* Handling forms and HTTP methods
* Structuring a full-stack project

