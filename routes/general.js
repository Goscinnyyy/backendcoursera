const express = require("express");
let books = require("../data/books");
let users = [];

const general_routes = express.Router();

// Task 1: Get all books
general_routes.get("/books", (req, res) => {
  return res.json(books);
});

// Task 2: Get book by ISBN
general_routes.get("/books/isbn/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  return res.json(books[isbn] || { message: "Book not found" });
});

// Task 3: Get books by Author
general_routes.get("/books/author/:author", (req, res) => {
  const author = req.params.author.toLowerCase();
  let result = Object.values(books).filter(
    (b) => b.author.toLowerCase() === author
  );
  return res.json(result);
});

// Task 4: Get books by Title
general_routes.get("/books/title/:title", (req, res) => {
  const title = req.params.title.toLowerCase();
  let result = Object.values(books).filter(
    (b) => b.title.toLowerCase().includes(title)
  );
  return res.json(result);
});

// Task 5: Get book review
general_routes.get("/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  if (books[isbn]) return res.json(books[isbn].reviews);
  else return res.status(404).json({ message: "Book not found" });
});

// Task 6: Register new user
general_routes.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Missing fields" });

  users.push({ username, password });
  return res.json({ message: "User registered successfully!" });
});

// Task 7: Login user
general_routes.post("/login", (req, res) => {
  const { username, password } = req.body;
  const found = users.find(
    (u) => u.username === username && u.password === password
  );
  if (found) return res.json({ message: "Login successful" });
  else return res.status(401).json({ message: "Invalid credentials" });
});

module.exports.general = general_routes;
module.exports.users = users;
