const connection = require("../dataBase/index.js");

module.exports = {
  getBooks: function (callback) {
    const sql = `SELECT * FROM books`;
    connection.query(sql, function (err, result) {
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
          console.log(err,"the error from here")
          callback(err, result);
        });
  },
  deleteOne: function (id, callback) {
    const sql = `DELETE FROM books WHERE id=${id}`;
    connection.query(sql, function (err, result) {
      callback(err, result);
    });
  },

  add: function(newBook,callback){
    const sql=`INSERT INTO BOOKS SET
    title="${newBook.title}",
    author="${newBook.author}",
    genre="${newBook.genre}",
    description="${newBook.description}",
    publication_date="${newBook.date}",
    language="${newBook.language}",
    number_pages=${newBook.pages},
    price="${newBook.price}",
    cover_image="${newBook.image}",
    users_id=2`
    connection.query(sql,function(err,rslt){
        callback(err,rslt)
    })
},

search:function(searchName,callback){
    const sql = `SELECT * FROM BOOKS WHERE title like "%${searchName}%"`
    connection.query(sql,function(err,rslt){
        callback(err,rslt)
    })
}
};

