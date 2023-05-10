const connection = require('../dataBase/index')

const userLogIn=(email,password,callback)=>{
    const sql='SELECT * FROM USERS WHERE email=? AND password=?'
    connection.query(sql,[email,password],(err,rslt)=>{
           if (err){
            callback(err)
           }
           else callback(null,rslt[0])
    })

}




module.exports={userLogIn}