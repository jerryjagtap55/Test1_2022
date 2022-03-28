const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minlength:5,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength:5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('mytable', signUpTemplate)