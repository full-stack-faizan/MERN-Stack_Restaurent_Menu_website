const mongoose = require('mongoose')

const ResturenData = new mongoose.Schema({

name:{
    type: String,
},

prize:{
    type: String,
},

image:{
    type: String,
},
detal:{
    type: String,
},
category:{
    type:String,
}

})

module.exports = mongoose.model('Resurent Data', ResturenData)