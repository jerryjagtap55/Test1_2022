const express = require( 'express' );
const recordRoutes = express.Router();
const dbo = require( '../controllers/conn' );
const product = require( '../models/product' );


recordRoutes.route( '/discover' ).get( function( req, res ) {
    let db_connect = dbo.getDb( "DigiArt" );
    db_connect
        .collection( "products" )
        .find( {} )
        .toArray( function( err, result ) {
            if ( err ) throw err;
            res.json( result );
            console.log( result );
        } );

} );

recordRoutes.route( '/user' ).get( function( req, res ) {
    let db_connect = dbo.getDb( "DigiArt" );
    db_connect
        .collection( "mytables" )
        .find( {} )
        .toArray( function( err, result ) {
            if ( err ) throw err;
            res.json( result );
            console.log( result );
        } );

} );

recordRoutes.route( '/user/:email' ).get( function( req, res ) {
    let db_connect = dbo.getDb();
    let myQuery = { email: req.params.email };
    db_connect
        .collection( "mytables" )
        .findOne( myQuery, function( err, result ) {
            if ( err ) throw err;
            res.json( result );
        } );


} );
//bought
recordRoutes.route( '/userproduct/:email' ).get( function( req, res ) {
    let db_connect = dbo.getDb();
    let myQuery = { email: req.params.email };
    db_connect
        .collection( "mytables" )
        .findOne( myQuery, function( err, result ) {
            if ( err ) throw err;
            res.json( result.products );
        } );


} );
//sold
recordRoutes.route( '/userproductsold/:email' ).get( function( req, res ) {
    let db_connect = dbo.getDb();
    let myQuery = { email: req.params.email };
    db_connect
        .collection( "mytables" )
        .findOne( myQuery, function( err, result ) {
            if ( err ) throw err;
            res.json( result.sold_products );
        } );
} );

recordRoutes.route( '/postbid/:id' ).post( function( req, res ) {
    // let db_connect = dbo.getDb();
    let products = product.findById( req.params.id );
    const newbid = {
        email: "a@b.com",
        price: "12"
    };

    products.biding.push( newbid );

} );

module.exports = recordRoutes;