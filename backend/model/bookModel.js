const connection = require("../dataBase/index.js");

module.exports = {
  getBooks: function (callback) {
    const sql = `SELECT * FROM books`;
    connection.query(sql, function (err, result) {
      console.log("hello");
      callback(err, result);
    });
  },
   updateOne:function(id, book, callback) {
    //   if (book.cover_image) {
    //   cloudinary.uploader.upload(book.cover_image, function (err, result) {
    //     if (err) callback(err, null);
    //     else book.cover_image = result.secure_url;
        const sql = `UPDATE books SET ? WHERE id=${id}`;
        connection.query(sql, book, (err, result) => {
          callback(err, result);
        });
  },
  deleteOne: function (id, callback) {
    const sql = `DELETE FROM books WHERE id=${id}`;
    connection.query(sql, function (err, result) {
      callback(err, result);
    });
  },
  putlike: function (callback, likes, idpost) {
    const sql = `UPDATE books SET likes = '${likes}' WHERE idpost ="${idpost}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
