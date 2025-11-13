const express = require("express");
let books = require("../data/books");

const auth_routes = express.Router();

// Task 8: Add or Modify review
auth_routes.put("/auth/review/:isbn", (req, res) => {
  const { user, review } = req.body;
  const isbn = req.params.isbn;

  if (books[isbn]) {
    books[isbn].reviews[user] = review;
    return res.json({ message: "Review added/updated successfully" });
  } else return res.status(404).json({ message: "Book not found" });
});

// Task 9: Delete review by user
auth_routes.delete("/auth/review/:isbn", (req, res) => {
  const { user } = req.body;
  const isbn = req.params.isbn;

  if (books[isbn] && books[isbn].reviews[user]) {
    delete books[isbn].reviews[user];
    return res.json({ message: "Review deleted successfully" });
  } else return res.status(404).json({ message: "Review not found" });
});

module.exports.auth = auth_routes;
