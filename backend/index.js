const express = require('express')
const router = require('./routes/bookRoute')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/Books-Gallery',router)

app.listen(port,()=> { console.log(`listening at http://localhost:${port}`)})