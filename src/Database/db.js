const mongoose = require('mongoose')
const url = process.env.MY_CLOUD_LINK;
const connetDB = async()=>{
try {
    
mongoose.connect(url)
console.log('MongoDB Cloud Connection is Successful')

} catch (error) {
    console.log(error)
}


}
connetDB()