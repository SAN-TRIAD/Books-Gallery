const express = require ('express')
const router = express.Router()

// const controller = require ('../controller/bookCont')

const {getAllBooks} = require ('../controller/bookCont')


router.get("/book/getAllBooks",getAllBooks)




module.exports=router