const express = require('express')
const path= require('path')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 4000
const router = require('./src/Routes/route')
const cors = require('cors')
app.use(cors())
app.use(router)

require('./src/Database/db')

app.use(express.static(path.join(__dirname + "/frontend/build")));

// app.get("*",(req,res)=>{
// res.sendFile(path.join(__dirname + "/frontend/build/index.html"))
// })
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

// console.log(path.resolve(__dirname, 'frontend', 'build', 'index.html'))

app.listen(port, ()=>{
    console.log(`express is successful http://localhost:4000/data/show`)
})





console.log('this is express')