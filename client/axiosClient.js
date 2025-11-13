const axios = require("axios");
const BASE_URL = "http://localhost:3000";


async function getAllBooks() {
  axios.get(`${BASE_URL}/books`)
    .then(res => console.log("All books:", res.data))
    .catch(err => console.error(err));
}

function getBookByISBN(isbn) {
  return axios.get(`${BASE_URL}/books/isbn/${isbn}`)
    .then(res => console.log("Book:", res.data))
    .catch(err => console.error(err));
}

async function getBooksByAuthor(author) {
  try {
    const res = await axios.get(`${BASE_URL}/books/author/${author}`);
    console.log("By author:", res.data);
  } catch (err) {
    console.error(err);
  }
}

async function getBooksByTitle(title) {
  try {
    const res = await axios.get(`${BASE_URL}/books/title/${title}`);
    console.log("By title:", res.data);
  } catch (err) {
    console.error(err);
  }
}

getAllBooks();
getBookByISBN("12345");
getBooksByAuthor("George Orwell");
getBooksByTitle("Gatsby");
