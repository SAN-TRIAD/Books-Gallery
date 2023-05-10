const express = require("express");
const router = express.Router();

const {addUser, getUser, deleteOne} = require ('../controller/userCon')


router.get("/user/getUser",getUser)
router.post("/user/signup", addUser);
router.delete("/user/:id",deleteOne)

module.exports = router;

