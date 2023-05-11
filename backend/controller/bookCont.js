const books = require("../model/bookModel");

const getAllBooks = (req, res) => {
  books.getBooks((err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

module.exports = { getAllBooks };
