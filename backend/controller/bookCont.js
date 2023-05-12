const books = require("../model/bookModel");
const cloudinary = require("../utils/cloudinary")

const getAllBooks = (req, res) => {
  books.getBooks((err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};
// const updateBook = (req, res) => {
//   const id = req.params.id;
//   const book = req.body;
//   if (book.cover_image) {
//       cloudinary.uploader.upload(book.cover_image, function (err, result) {
//           if (err) {
//               console.log(err);
//               res.status(500).send("Failed to upload image to Cloudinary");
//           } else {
//               book.cover_image = result.secure_url;

//               user.updateOne(id, book, function (err, result) {
//                   if (err) console.log(err);
//                   else res.json(result);
//               });
//           }
//       });
//   } else {
//       user.updateOne(id, book, function (err, result) {
//           if (err) console.log(err);
//           else res.json(result);
//       });
//   }
// };

// const updateBook = (req, res) => {
//   const id = req.params.id;
//   const book = req.body;
//   const file = req.file;

//   if (file) {
//     fs.readFile(file.path, function(err, data) {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Failed to read file from disk");
//       } else {
//         cloudinary.uploader.upload_stream({resource_type: 'auto'}, function (err, result) {
//           if (err) {
//             console.log(err);
//             res.status(500).send("Failed to upload image to Cloudinary");
//           } else {
//             book.cover_image = result.secure_url;

//             books.updateOne({_id: id}, book, function (err, result) {
//               if (err) {
//                 console.log(err);
//                 res.status(500).send("Failed to update book");
//               } else {
//                 res.json(result);
//               }
//             });
//           }
//         }).end(data);
//       }
//     });
//   } else {
//     books.updateOne({_id: id}, book, function (err, result) {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Failed to update book");
//       } else {
//         res.json(result);
//       }
//     });
//   }
// };
const updateBook=(req,res)=>{
  const id=req.params.id;
  const book=req.body;
  books.updateOne(id,book,(err,result)=>{
    if(err) res.status(500).send(err);
    else res.status(200).send("book updated successfully");
  })
}
const deleteBook=(req,res)=>{
  const id=req.params.id
  books.deleteOne(id,(err,result)=>{
    if(err)res.status(404).send(err)
    else res.status(201).send("book deleted")
  })
}


module.exports = { getAllBooks, updateBook, deleteBook };
