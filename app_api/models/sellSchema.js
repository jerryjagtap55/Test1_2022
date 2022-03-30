// Schema

const mongoose = require('mongoose')

const sellSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        minlength:5,
        maxlength: 50
    },
    artName: {
        type: String,
        required: true,
        minlength:5,
        maxlength: 50
    },
   artDesc: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 200,
        
    },
    bidstartPrice: {
        type: String,
        required: true,
       
    },
    date: {
        type: Date,
        default: Date.now
    },
    artImage:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('sellData', sellSchema)