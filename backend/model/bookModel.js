const connection = require("../dataBase/index.js");

module.exports = {
    getBooks:function(callback){
        const sql=`SELECT * FROM books`
        connection.query(sql,function(err,result){
            callback(err,result)
        })
    }
};
