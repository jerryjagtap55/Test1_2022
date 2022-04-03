const mongoose = require( 'mongoose' );

const connectDb = async () => {
  try {
    await mongoose.connect( "mongodb+srv://admin:pass@cluster0.svy4o.mongodb.net/DigiArt?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } );
    console.log( '### Mongo DB connected...' );
  } catch ( err ) {
    console.log( err );
    // Quit server if db connection fails
    process.exit( 1 );
  }
};

module.exports = connectDb;
