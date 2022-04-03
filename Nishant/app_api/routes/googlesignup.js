const express = require( 'express' );
const router = express.Router();
const signUpTemplateCopy = require( '../models/User' );
const { OAuth2Client } = require( 'google-auth-library' );

const client = new OAuth2Client( "188636961924-aqg9ristkvg8mhba6hj8dpd3g7rqt0vc.apps.googleusercontent.com" );

router.post( '/signup', async ( request, response ) => {


    const { tokenId } = request.body;

    client.verifyIdToken( { idToken: tokenId, audience: "188636961924-aqg9ristkvg8mhba6hj8dpd3g7rqt0vc.apps.googleusercontent.com" } ).then( response => {
        const { email_verifired, family_name, given_name, email } = response.payload;
        console.log( response.payload );

        signUpTemplateCopy.findOne( { email } ).exec( ( err, user ) => {
            if ( user ) {
                //console.log( "user exists" );
                window.location.replace( "/login" );
            }
            let newUser = new signUpTemplateCopy( {

                username: response.payload.given_name,
                email: response.payload.email

            } );
            newUser.save( ( err, success ) => {
                if ( err ) {
                    console.log( "error in signup:", err );

                } else {
                    console.log( "success" );
                }

            } );
        } );

    } );
} );

router.post( '/signin', async ( request, response ) => {
    const { tokenId } = request.body;

    client.verifyIdToken( { idToken: tokenId, audience: "188636961924-aqg9ristkvg8mhba6hj8dpd3g7rqt0vc.apps.googleusercontent.com" } ).then( response => {
        const { email_verifired, family_name, given_name, email } = response.payload;
        // console.log( response.payload );
        signUpTemplateCopy.findOne( { email } ).exec( ( err, user ) => {
            if ( user ) {
                console.log( "success" );
            }
        } );

    } );
} );


module.exports = router;