const express = require ('express')
const router = express.Router()

// const controller = require ('../controller/bookCont')

const {getAllBooks, updateBook, deleteBook,getBook,addNewBook} = require ('../controller/bookCont')


router.get("/book/getAllBooks",getAllBooks)
router.put("/book/:id",updateBook)
router.delete("/book/:id",deleteBook)
router.get("/book/search/:bookName",getBook)
router.post("/book/addNewBook",addNewBook)




module.exports=router