
const connection=require('../dataBase/index.js')

module.exports={
    getAll:function(callback){
        const sql=`SELECT * FROM users`
        connection.query(sql,function(err,result){
            console.log("hello")
            callback(err,result)
        })
    },
    add:function(user,callback){
        const sql=`INSERT INTO users SET ?`
        connection.query(sql,user,function(err,result){
            console.log(err,"here is the err")
            callback(err,result)
        })
    },
    getOne:function(email){
        const sql=`SELECT * FROM users WHERE email='${email}'`
        return new Promise((resolve,reject)=>{connection.query(sql,(err,result)=>{
            if(err){
                reject(err)
            }
            else{ 
                resolve(result)
            }})
        
        })
    },
    deleteUser:function(id,callback){
        const sql=`DELETE FROM users WHERE id=${id}`
        connection.query(sql,function(err,result){
            callback(err,result)
        })
    },

    userLogIn:function(email,callback){
        const sql='SELECT * FROM USERS WHERE email=? limit 1'
        connection.query(sql,[email],(err,rslt)=>{
            if (err){
                callback(err)
            }
            else callback(null,rslt[0])
        })

}

};
