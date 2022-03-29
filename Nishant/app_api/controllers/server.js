const express = require( 'express' );
const app = express();
const mongoose = require( 'mongoose' );
const dotenv = require( 'dotenv' );
const routesUrls = require( '../routes/register' );
const apiroute = require( '../routes/googlesignup' );
const cors = require( 'cors' );

dotenv.config();
mongoose.connect( "mongodb+srv://admin:pass@cluster0.svy4o.mongodb.net/DigiArt?retryWrites=true&w=majority", () => console.log( "Database connected..!!" ) );

app.use( express.json() );
app.use( cors() );


app.use( '/app', routesUrls );
app.use( '/api', apiroute );

app.listen( 4000, () => console.log( "Server is up and running" ) );