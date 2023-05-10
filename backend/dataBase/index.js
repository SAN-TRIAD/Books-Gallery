const mysql = require('mysql2')
const config = require('./config')

const connection = mysql.createConnection(config)

connection.connect((error) => {
  if (error) { 
    console.log(error)
  } else {
    console.log('Connected to database')
  }
})

module.exports = connection