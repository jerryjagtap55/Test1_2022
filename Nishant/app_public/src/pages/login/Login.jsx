import React from 'react';
import './login.css';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
// MUI
import {
    Grid,
    TextField,
    Link,
    FormControlLabel,
    Checkbox,
    Button,
} from '@mui/material';



const Login = () => {

    // event handeler

    function onSubmit () {
        var emailValue = document.getElementById( 'email' ).value;
        var password = document.getElementById( 'password' ).value;



        axios.get( 'http://localhost:4000/app/signin', {
            params: {
                email: emailValue
            }
        } ).then( response => {
            if ( Object.keys( response.data ).length ) {

                if ( response.data.password === password ) {
                    console.log( "login success" );
                } else {
                    console.log( "login unsuccess" );
                }
            } else {
                console.log( "email not found" );
            }
        } );


        //navigate to another page.
        window.location = '/';
    }
    const responseGoogle = ( response ) => {
        console.log( response.profileObj.email );


        axios( {
            method: "POST",
            url: "http://localhost:4000/api/signin",
            data: { tokenId: response.tokenId }
        } ).then( response => {
            console.log( "google login success", response );
        } );

        //navigate to another page.
        // window.location = '/user';

    };



    return (


        <Grid className="logInform">
            <Grid item container xs={4} className="logInform" spacing={2} width={600} minWidth={300} >
                <Grid item sm={12}>
                    <h2>
                        Log in to your account
                    </h2>
                </Grid>
                <Grid item sm={12}>
                    <p>Welcome back! Please enter your details.</p>
                </Grid>
                <Grid item sm={12} className='marginauto'>
                    <TextField fullWidth id="email" size="small" label="Email" variant="outlined" placeholder="Please enter your email" />
                </Grid>
                <Grid item sm={12} className='marginauto'>
                    <TextField label='Password' id="password" size="small" placeholder='Enter password' type='password' fullWidth />

                </Grid>
                <Grid item sm={12} className='rememberstyle'>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Link href="#" >
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item sm={12} minWidth={250}>
                    <Button type='submit' onClick={() => onSubmit()} color='primary' variant="contained" fullWidth>Log in</Button>
                </Grid>


                <Grid item sm={12}>

                    <GoogleLogin
                        clientId="188636961924-aqg9ristkvg8mhba6hj8dpd3g7rqt0vc.apps.googleusercontent.com"
                        buttonText="login with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />


                </Grid>

                <Grid item sm={12}>
                    Don't have an account? &nbsp;
                    <Link href="/signup" >
                        Sign Up
                    </Link>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default Login;