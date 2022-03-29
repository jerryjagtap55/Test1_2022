import React from 'react';
import './signup.css';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

// MUI
import {
    Grid,
    TextField,
    Link,
    Button,
} from '@mui/material';

const SignUp = () => {
    function onSubmit () {
        var firstName = document.getElementById( 'firstName' ).value;
        var lastName = document.getElementById( 'lastName' ).value;
        var email = document.getElementById( 'email' ).value;
        var password = document.getElementById( 'password' ).value;

        const registered = {
            firstName,
            lastName,
            email,
            password
        };

        axios.post( "http://localhost:4000/app/signup", registered )
            .then( response => console.log( response.data ) );

        //navigate to another page.
        window.location = './login';

        const responseGoogle = ( response ) => {
            console.log( response.profileObj.email );


            axios( {
                method: "POST",
                url: "http://localhost:4000/api/signup",
                data: { tokenId: response.tokenId }
            } ).then( response => {
                console.log( "google login success", response );
            } );

            //navigate to another page.
            window.location = '/user';

        };
    }

    return (
        <Grid className="logInform"  >
            <Grid item container xs={4} className="logInform" spacing={2} width={600} minWidth={300}>
                <Grid item sm={12}>
                    <h2>
                        Create an account
                    </h2>
                </Grid>
                <Grid item sm={12}>
                    <p>Start your journey!</p>
                </Grid>
                <Grid item sm={12} className='marginauto'>
                    <TextField fullWidth id="firstName" name="firstName" size="small" label="First Name" variant="outlined" placeholder="Enter your First name " />
                </Grid>
                <Grid item sm={12} className='marginauto'>
                    <TextField fullWidth id="lastName" name="lastName" size="small" label="Last Name" variant="outlined" placeholder="Enter your Last name" />
                </Grid>
                <Grid item sm={12} className='marginauto'>
                    <TextField fullWidth id="email" name="email" size="small" label="Email" variant="outlined" placeholder="Enter your email" />
                </Grid>

                <Grid item sm={12} className='marginauto'>
                    <TextField id="password" label='Password' size="small" name="password" placeholder='Create a password' type='password' fullWidth />

                </Grid>
                <Grid item sm={12} minWidth={250}>
                    <Button type='submit' onClick={() => onSubmit()} color='primary' variant="contained" fullWidth>Get started</Button>
                </Grid>


                <Grid item sm={12}>
                    <GoogleLogin
                        clientId="188636961924-aqg9ristkvg8mhba6hj8dpd3g7rqt0vc.apps.googleusercontent.com"
                        buttonText="Sign up with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </Grid>

                <Grid item sm={12}>
                    Already have an account? &nbsp;
                    <Link href="/login" >
                        Log In
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );

};








export default SignUp;