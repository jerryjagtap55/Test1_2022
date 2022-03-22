const mongoose = require("mongoose");

const dbURI = 'mongodb+srv://admin:admin@food.4mnvq.mongodb.net/lantDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, {dbName: 'DreamDB'});
/*
mongodb+srv://admin:<password>@food.4mnvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
   console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => { 
    mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
    });
}
    // nodemon changes
   process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
    });
   });   

// app termination
   process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
    process.exit(0);
    });
   });


require('./signupmodel');