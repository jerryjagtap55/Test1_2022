const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    cardImage:{
        type: String
    },
    
    cardTitle: {
        type: String,
        required: true,
        minlength:3,
        
    },
    userName: {
        type: String,
        required: true,
        minlength: 3,
    },
    cardDetails: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 200
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('mytable', productSchema)