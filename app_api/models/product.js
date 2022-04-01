// Schema

// const mongoose = require('mongoose')

// const sellSchema = new mongoose.Schema({
//     userName:{
//         type: String,
//         required: true,
//         minlength:5,
//         maxlength: 50
//     },
//     artName: {
//         type: String,
//         required: true,
//         minlength:5,
//         maxlength: 50
//     },
//    artDesc: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 200,
        
//     },
//     bidstartPrice: {
//         type: String,
//         required: true,
       
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     },
//     artImage:{
//         type: String,
//         required: true
//     }
// })
// module.exports = mongoose.model('sellData', sellSchema)



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
    image: {
        //data: Buffer,
        contentType: String
    },
    // artist_details: [
    //     {
    //         id: {
    //             type: String,
    //             //required: true
    //         },
    //         name: {
    //             type: String,
    //             //required: true
    //         },
    //         release_date: {
    //             type: Date,
    //             default: Date.now
    //         },
    //         timer: {
    //             type: Date,
    //             //  default: Date.now
    //         }

    //     }
    // ],
    category: {
        type: String,
        required: true
    },
    biding_start_price: {
        type: Number,
        required: true
    },
    user_date:{
        type: String
    }
    // biding: [
    //     {
    //         email: {
    //             type: String,
    //            // required: true
    //         },
    //         bidprice: {
    //             type: String,
    //             //required: true
    //         }
    //     }
    //]

} );
module.exports = mongoose.model( 'product', product );