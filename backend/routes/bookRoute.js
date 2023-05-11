const express = require ('express')
const router = express.Router()

// const controller = require ('../controller/bookCont')

const {getAllBooks, updateBook, deleteBook} = require ('../controller/bookCont')


router.get("/book/getAllBooks",getAllBooks)
router.put("/book/:id",updateBook)
router.delete("/book/:id",deleteBook)




module.exports=router