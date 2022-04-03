// Schema

const mongoose = require( 'mongoose' );

const signUpTemplate = new mongoose.Schema( {
    firstName: {
        type: String,
        required: true

    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        //required: true
    },
    products: [
        {
            name: {
                type: String
            },
            price: {
                type: String
            }
        }
    ],
    sold_products: [
        {
            name: {
                type: String
            },
            price: {
                type: String
            }
        }

    ],
    date: {
        type: Date,
        default: Date.now
    }
} );
module.exports = mongoose.model( 'mytable', signUpTemplate );