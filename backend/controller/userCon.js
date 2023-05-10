
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../model/userModel');
const jwtConfig = require('../dataBase/config.js');
const dotenv = require('dotenv');

dotenv.config();

const verifyToken = (token) => jwt.verify(token, jwtConfig.secret);

const getUser = (req, res) => {
  user.getAll((err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};


const addUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(salt);
    console.log(hashedPassword);
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      
    }
    user.add(newUser, (err, results) => {
      if (err) console.log(err);
      const token = jwt.sign(
        { userId: newUser._id, name: newUser.name },
        process.env.token,
        { expiresIn: '1h' }
      );
      console.log(token, 'this is token');
      return res.status(201).json({ token });
    });
  } catch (err) {
    return res.status(500).json({ message: 'Something went wrong', err });
  }
};


const deleteOne= (req,res)=>{
  user.deleteUser(req.params.id, (err, results) => {
    if (err) res.status(404).send(err);
    else res.status(204).send(results);
  })
}

module.exports = {
  getUser,
  addUser,
  deleteOne
};
