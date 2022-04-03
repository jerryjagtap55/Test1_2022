// Schema

const mongoose = require( 'mongoose' );

const product = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Image: {
        //data: Buffer,
        contentType: String
    },
    artist_details: [
        {
            id: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            release_date: {
                type: Date,
                default: Date.now
            },
            timer: {
                type: Date,
                //  default: Date.now
            }

        }
    ],
    category: {
        type: String,
        required: true
    },
    biding_start_price: {
        type: String,
        required: true,
    },
    biding: [
        {
            email: {
                type: String,
                required: true
            },
            bidprice: {
                type: String,
                required: true
            }
        }
    ]

} );
module.exports = mongoose.model( 'productSchema', product );