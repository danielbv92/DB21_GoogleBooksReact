import axios from "axios";

export default {
  // Gets all books
  getBooks: function(q) {
    return axios.get("/api/books", { params: { q: "title:" + q } });
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};