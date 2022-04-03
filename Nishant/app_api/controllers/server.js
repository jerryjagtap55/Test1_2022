const express = require( 'express' );
const app = express();
const mongoose = require( 'mongoose' );
const dotenv = require( 'dotenv' );
const routesUrls = require( '../routes/register' );
const apiroute = require( '../routes/googlesignup' );
const homedata = require( '../routes/homedata' );
//const userdata = require( '../routes/userdata' );
const cors = require( 'cors' );
const dbo = require( './conn' );


dotenv.config();
//mongoose.connect( "mongodb+srv://admin:pass@cluster0.svy4o.mongodb.net/DigiArt?retryWrites=true&w=majority", () => console.log( "Database connected..!!" ) );
app.use( express.json() );
app.use( cors() );
// append server.js to routes.js
app.use( '/app', routesUrls );
app.use( '/api', apiroute );
app.use( '/', homedata );
//app.use( '/user/:email', userdata );
app.listen( 4000, () => {
    dbo.connectToServer( function( err ) {
        if ( err ) console.error( err );

    } );
    console.log( `Server is running on port` );
} );
