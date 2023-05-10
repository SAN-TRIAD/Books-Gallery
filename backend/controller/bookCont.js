const books = require ('../dataBase/bookModel')

const login=(req,res)=>{
    const email=req.body.email
    const password=req.body.password

    books.userLogIn(email,password,(err,user)=>{
 	if (err) res.status(500).send('Error occured')
	if (!user) res.status(401).send('Your email address or password are invalid')
	else res.json('You logged in successfully')
})
}




module.exports={login}