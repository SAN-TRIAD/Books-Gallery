const express = require("express");
const router = express.Router();

const {addUser, getUser, deleteOne,login} = require ('../controller/userCon')


router.get("/user/getUser",getUser)
router.post("/user/signup", addUser);
router.delete("/user/:id",deleteOne)
router.post('/user/login',login)

module.exports = router;

