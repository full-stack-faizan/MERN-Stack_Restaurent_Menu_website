const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 4000
const router = require('./Routes/route')
const cors = require('cors')
app.use(cors())
app.use(router)

require('./Database/db')
if(process.env.NODE_ENV== 'production'){

app.use(express.static("deployment/build"))
const path= require('path')
app.get("*",(req,res)=>{
res.sendFile(path.resolve(__dirname, "deployment","build","index.html"))
})
}


app.listen(port, ()=>{
    console.log(`express is successful http://localhost:4000/data/show`)
})





console.log('this is express')